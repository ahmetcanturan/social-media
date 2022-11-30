import Database from "../dal/DependencyInversion.js"

const database = new Database("chat")
const getAllChats = async () => {
    const chats = await database.db().getAll()
    return chats
}
const getChatById = async (id) => {
    const chat = await database.db().getById(id)
    const json = (chat == null) ? { data: "null", chat: "No Data" } : chat
    return json
}
const getChatByUserId = async (data) => {
    const chat1 = await database.db().findMultipleCondition(`user1_id=${data.user1_id} AND user2_id=${data.user2_id}`)
    const chat2 = await database.db().findMultipleCondition(`user1_id=${data.user2_id} AND user2_id=${data.user1_id}`)
    if (chat1 == null & chat2 == null) {
        return { data: "null", chat: "No Data" }
    }
    else if (chat1 != null) {
        return chat1
    }
    else return chat2
}
const createChat = async (data) => {
    const json = { user1_id: data.user1_id, user2_id: data.user2_id }
    const chat = await database.db().create(json)
    return chat
}
const deleteAChatByChatId = async (id) => {
    const chat = await database.db().deleteById(id)
    return (chat.affectedRows > 0) ? chat : { status: false, chat: "Can not find chat " }
}


export { getAllChats, getChatById, getChatByUserId, createChat, deleteAChatByChatId }