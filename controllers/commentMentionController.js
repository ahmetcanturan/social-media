import * as service from "../services/commentMentionService.js"
import { validate } from "../utils/index.js"
import { exception } from "../logger/index.js"
const getAllComments = async (req, res) => {
    try {
        const json = await service.getAllComments()
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getCommentById = async (req, res) => {
    try {
        const json = await service.getCommentById(req.params.CommentId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getAllCommentsOfMentionByMentionId = async (req, res) => {
    try {
        const json = await service.getAllCommentsOfMentionByMentionId(req.params.mentionId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const createComment = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.createComment(req.body)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const updateComment = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.updateComment(req.params.commentId, req.body)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const deleteComment = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.deleteComment(req.params.commentId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}

export { getAllComments, getCommentById, getAllCommentsOfMentionByMentionId, createComment, updateComment, deleteComment }