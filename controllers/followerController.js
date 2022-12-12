import * as service from "../services/FollowerService.js"
import { validate } from "../utils/index.js"
import { exception } from "../logger/index.js"
const getAllFollowers = async (req, res) => {
    try {
        const json = await service.getAllFollowers()
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getFollowerById = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.getFollowerById(req.params.followerId)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getFollowersByUserId = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.getFollowersByUserId(req.params.userId)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getIFollowedByfollowedId = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.getIFollowedByfollowedId(req.params.followedId)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const createFollower = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        if (await service.isFollowed(req.body) != null) { return res.status(404).json({ status: false, message: "You are already following" }) }
        const json = await service.createFollower(req.body)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const deleteFollower = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.deleteFollower(req.params.followerId)
        res.status(201).json(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}

export { getAllFollowers, getFollowerById, getFollowersByUserId, getIFollowedByfollowedId, createFollower, deleteFollower }