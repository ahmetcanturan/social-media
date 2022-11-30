import * as service from "../services/mentionLabelService.js"
import { validate } from "../utils/index.js"
import { exception } from "../logger/index.js"
const getAllMentionLabels = async (req, res) => {
    try {
        const json = await service.getAllMentionLabels()
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getMentionLabelById = async (req, res) => {
    try {
        const json = await service.getMentionLabelById(req.params.mentionLabelId)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getMentionLabelsByMentionId = async (req, res) => {
    try {

        const json = await service.getMentionLabelsByMentionId(req.params.mentionId)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getMentionLabelsByLabelId = async (req, res) => {
    try {

        const json = await service.getMentionLabelsByLabelId(req.params.labelId)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}

const createMentionLabel = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const mentionLabel = await service.createMentionLabel(req.body)
        res.status(201).json(mentionLabel)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const deleteAMentionLabelById = async (req, res) => {
    try {
        const json = await service.deleteAMentionLabelById(req.params.mentionLabelId)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const deleteMentionLabelsByMentionId = async (req, res) => {
    try {
        const json = await service.deleteMentionLabelsByMentionId(req.params.mentionId)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const deleteMentionLabelsByLabelId = async (req, res) => {
    try {
        const json = await service.deleteMentionLabelsByLabelId(req.params.labelId)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
export {
    getAllMentionLabels, getMentionLabelsByMentionId, getMentionLabelById,
    getMentionLabelsByLabelId, createMentionLabel, deleteAMentionLabelById,
    deleteMentionLabelsByMentionId, deleteMentionLabelsByLabelId
}