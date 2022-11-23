import * as service from "../services/userService.js"
import { validate } from "../utils/index.js"
const getAllUsers = async (req, res) => {
    try {
        const json = await service.getAllUsers()
        res.status(201).send(json)
    } catch (error) {
        console.log(error)
        res.status(500).redirect("/")
    }
}
const createUser = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.createUser(req.body)
        res.status(201).send(json)
    } catch (error) {
        console.log(error)
        res.status(500).redirect("/")
    }
}
const updateUser = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.updateUser(req.params.userId, req.body)
        res.status(201).send(json)
    } catch (error) {
        console.log(error)
        res.status(500).redirect("/")
    }
}
const deleteUser = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.deleteUser(req.params.userId)
        res.status(201).send(json)
    } catch (error) {
        console.log(error)
        res.status(500).redirect("/")
    }
}


export { getAllUsers, createUser, updateUser, deleteUser }