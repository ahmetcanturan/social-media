import Database from "../dal/DependencyInversion.js"

const database = new Database("message")
const getAllMessages = async () => {
    const messages = await database.db().getAll()
    return messages
}
const getMessageById = async (id) => {
    const message = await database.db().getById(id)
    const json = (message == null) ? { data: "null", message: "No Data" } : message
    return json
}
const getAllMessagesOfChatByChatId = async (data) => {
    const message = await database.db().findWhere(data)
    const json = (message == null) ? { data: "null", message: "No Data" } : message
    return json
}
const getAllMessagesBySenderId = async (id) => {
    const message = await database.db().findWhere({ sender_id: id })
    const json = (message == null) ? { data: "null", message: "No Data" } : message
    return json
}
const getAllMessagesByReceiverId = async (id) => {
    const message = await database.db().findWhere({ receiver_id: id })
    const json = (message == null) ? { data: "null", message: "No Data" } : message
    return json
}
const createMessage = async (data) => {
    const json = { sender_id: data.sender_id, receiver_id: data.receiver_id, chat_id: data.chat_id, content: data.content, created_time: Date.now() }
    const message = await database.db().create(json)
    return message
}
const deleteMessage = async (id) => {
    const message = await database.db().deleteById(id)
    return (message.affectedRows > 0) ? message : { status: false, message: "Can not find Message " }
}

export { getAllMessages, getMessageById, getAllMessagesOfChatByChatId, getAllMessagesBySenderId, getAllMessagesByReceiverId, createMessage, deleteMessage }