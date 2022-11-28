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
const getMessagesOfAChat = async (data) => {
    const sentMessage = await database.db().findMultipleCondition(`sender_id=${data.sender_id} AND receiver_id=${data.receiver_id}`)
    const receivedMessage = await database.db().findMultipleCondition(`sender_id=${data.receiver_id} AND receiver_id=${data.sender_id}`)
    const messages = sentMessage?.concat(receivedMessage)
    const list = []
    for (const obj of messages) {
        list.push(obj.created_time)
    }
    list.sort(function (a, b) { return a - b })
    const filt_messages = []
    for (const time of list) {
        filt_messages.push(messages.filter(i => i.created_time == time)[0])
    }
    const json = (filt_messages == null) ? { data: "null", message: "No Data" } : filt_messages
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
    const json = { sender_id: data.sender_id, receiver_id: data.receiver_id, content: data.content, created_time: Date.now() }
    const message = await database.db().create(json)
    return message
}
const deleteMessage = async (id) => {
    const message = await database.db().deleteById(id)
    return (message.affectedRows > 0) ? message : { status: false, message: "Can not find Message " }
}
// TODO chat id ver chat'i özel id ile manupüle et
const deleteAChat = async (data) => {
    const sentMessage = await database.db().deleteMultipleCondition(`sender_id=${data.sender_id} AND receiver_id=${data.receiver_id}`)
    const receivedMessage = await database.db().deleteMultipleCondition(`sender_id=${data.receiver_id} AND receiver_id=${data.sender_id}`)
    const json = { SentMessages: sentMessage, ReceivedMessages: receivedMessage }
    return json
}

export { getAllMessages, getMessageById, getMessagesOfAChat, getAllMessagesBySenderId, getAllMessagesByReceiverId, createMessage, deleteMessage, deleteAChat }