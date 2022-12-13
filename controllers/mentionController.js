import * as service from "../services/mentionService.js"
import { validate } from "../utils/index.js"
import { exception } from "../logger/index.js"
const getAllMentions = async (req, res) => {
    try {
        const json = await service.getAllMentions()
        return res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getMentionById = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.getMentionById(req.params.mentionId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getAllMentionsOfUserByUserId = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.getAllMentionsOfUserByUserId(req.params.userId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const createMention = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.createMention(req.body)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const updateMention = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.updateMention(req.params.mentionId, req.body)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const deleteMention = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.deleteMention(req.params.mentionId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}

export { getAllMentions, getMentionById, getAllMentionsOfUserByUserId, createMention, updateMention, deleteMention }