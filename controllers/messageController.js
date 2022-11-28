import * as service from "../services/messageService.js"
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
const getMessagesOfAChat = async (req, res) => {
    try {
        const json = await service.getMessagesOfAChat(req.body)
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
        const json = await service.createMessage(req.body)
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
const deleteAChat = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.deleteAChat(req.body)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}

export { getAllMessages, getMessageById, getMessagesOfAChat, getAllMessagesBySenderId, getAllMessagesByReceiverId, createMessage, deleteMessage, deleteAChat }