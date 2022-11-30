import * as service from "../services/postLabelService.js"
import { validate } from "../utils/index.js"
import { exception } from "../logger/index.js"
const getAllPostLabels = async (req, res) => {
    try {
        const json = await service.getAllPostLabels()
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getPostLabelById = async (req, res) => {
    try {
        const json = await service.getPostLabelById(req.params.postLabelId)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getPostLabelsByPostId = async (req, res) => {
    try {

        const json = await service.getPostLabelsByPostId(req.params.postId)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getPostLabelsByLabelId = async (req, res) => {
    try {

        const json = await service.getPostLabelsByLabelId(req.params.labelId)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}

const createPostLabel = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const postLabel = await service.createPostLabel(req.body)
        res.status(201).json(postLabel)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const deleteAPostLabelById = async (req, res) => {
    try {
        const json = await service.deleteAPostLabelById(req.params.postLabelId)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const deletePostLabelsByPostId = async (req, res) => {
    try {
        const json = await service.deletePostLabelsByPostId(req.params.postId)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const deletePostLabelsByLabelId = async (req, res) => {
    try {
        const json = await service.deletePostLabelsByLabelId(req.params.labelId)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
export {
    getAllPostLabels, getPostLabelsByPostId, getPostLabelById,
    getPostLabelsByLabelId, createPostLabel, deleteAPostLabelById,
    deletePostLabelsByPostId, deletePostLabelsByLabelId
}