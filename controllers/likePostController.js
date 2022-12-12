import * as service from "../services/LikepostService.js"
import { validate } from "../utils/index.js"
import { exception } from "../logger/index.js"
const getAllLikes = async (req, res) => {
    try {
        const json = await service.getAllLikes()
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getLikeById = async (req, res) => {
    try {
        const json = await service.getLikeById(req.params.likeId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getAllLikesOfPostByPostId = async (req, res) => {
    try {
        const json = await service.getAllLikesOfPostByPostId(req.params.postId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getAllLikedOfUserByUserId = async (req, res) => {
    try {
        const json = await service.getAllLikedOfUserByUserId(req.params.userId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const createLike = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        if (await service.isLiked(req.body) != null) { return res.status(404).json({ status: false, message: "You are already liked" }) }
        const json = await service.createLike(req.body)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const deleteLike = async (req, res) => {
    try {
        const json = await service.deleteLike(req.params.likeId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}

export { getAllLikes, getLikeById, getAllLikesOfPostByPostId, getAllLikedOfUserByUserId, createLike, deleteLike }