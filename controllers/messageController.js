import * as service from "../services/messageService.js"
import * as chatService from "../services/chatService.js"
import { validate } from "../utils/index.js"
import { exception } from "../logger/index.js"
const getAllMessages = async (req, res) => {
    try {
        const json = await service.getAllMessages()
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getMessageById = async (req, res) => {
    try {
        const json = await service.getMessageById(req.params.messageId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getChatByChatId = async (req, res) => {
    try {

        const json = await chatService.getChatById(req.params.chatId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getAllMessagesOfChatByChatId = async (req, res) => {
    try {
        const json = await service.getAllMessagesOfChatByChatId({ chat_id: req.params.chatId })
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getAllMessagesBySenderId = async (req, res) => {
    try {
        const json = await service.getAllMessagesBySenderId(req.params.senderId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getAllMessagesByReceiverId = async (req, res) => {
    try {
        const json = await service.getAllMessagesByReceiverId(req.params.receiverId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const createMessage = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const chat = await chatService.getChatByUserId({ user1_id: req.body.sender_id, user2_id: req.body.receiver_id })
        let chat_id = 0
        if (chat?.data == "null") {
            const newChat = await chatService.createChat({ user1_id: req.body.sender_id, user2_id: req.body.receiver_id })
            chat_id = newChat.insertId
        }
        else {
            chat_id = chat[0].Id
        }
        const json = await service.createMessage({ ...req.body, chat_id: chat_id })
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const deleteMessage = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.deleteMessage(req.params.messageId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const deleteAChatByChatId = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await chatService.deleteAChatByChatId(req.params.chatId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}

export { getAllMessages, getMessageById, getChatByChatId, getAllMessagesOfChatByChatId, getAllMessagesBySenderId, getAllMessagesByReceiverId, createMessage, deleteMessage, deleteAChatByChatId }