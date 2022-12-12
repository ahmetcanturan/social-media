import * as service from "../services/postService.js"
import * as fileUpload from "../services/fileUploadService.js"
import { validate } from "../utils/index.js"
import { exception } from "../logger/index.js"
import { getHost } from "../utils/index.js"
const getAllPosts = async (req, res) => {
    try {
        const json = await service.getAllPosts()
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getPostById = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.getPostById(req.params.postId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getAllPostsOfUserByUserId = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.getAllPostsOfUserByUserId(req.params.userId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const createPost = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.createPost(req.body)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const updatePost = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.updatePost(req.params.postId, req.body)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const deletePost = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.deletePost(req.params.postId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}

const imageUploadByPostId = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        fileUpload.imageUpload(req, res, async (err) => {
            if (err) return res.json({ succeed: false, error: err }).status(400)
            if (req?.file?.filename == undefined) return res.json({ error: "You didn't pick a photo", succeed: false })
            const path = await getHost(req.file.path)
            await service.updateContentPath(req.params.postId, { content_path: req.file.path })
            res.json({ succeed: true, path: path })
        })
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const videoUploadByPostId = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        fileUpload.videoUpload(req, res, async (err) => {
            if (err) return res.json({ succeed: false, error: err }).status(400)
            if (req?.file?.filename == undefined) return res.json({ error: "You didn't pick a video", succeed: false })
            const path = await getHost(req.file.path)
            await service.updateContentPath(req.params.postId, { content_path: req.file.path })
            res.json({ succeed: true, path: path })
        })
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
export { getAllPosts, getPostById, getAllPostsOfUserByUserId, createPost, updatePost, deletePost, imageUploadByPostId, videoUploadByPostId }