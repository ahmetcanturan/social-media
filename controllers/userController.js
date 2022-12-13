import * as service from "../services/userService.js"
import { validate } from "../utils/index.js"
import { exception } from "../logger/index.js"
import publisher from "../rabbitmq/publisher.js"

const login = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.login(req.body)
        if (json?.status == false) return res.status(400).json(json)
        res.status(201).json({ status: true, token: json })
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getAllUsers = async (req, res) => {
    try {
        const json = await service.getAllUsers()
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const getUserById = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.getUserById(req.params.userId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const createUser = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.createUser(req.body)
        await publisher({ data: req.body.email })
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const updateUser = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.updateUser(req.params.userId, req.body)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}
const deleteUser = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.deleteUser(req.params.userId)
        res.status(201).send(json)
    } catch (error) {
        exception(error, req)
        res.status(500).redirect("/")
    }
}


export { login, getAllUsers, getUserById, createUser, updateUser, deleteUser }