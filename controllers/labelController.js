import * as service from "../services/labelService.js"
import { validate } from "../utils/index.js"
const getAllLabels = async (req, res) => {
    try {
        const json = await service.getAllLabels()
        res.status(201).send(json)
    } catch (error) {
        console.log(error)
        res.status(500).redirect("/")
    }
}
const getLabelById = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.getLabelById(req.params.labelId)
        res.status(201).send(json)
    } catch (error) {
        console.log(error)
        res.status(500).redirect("/")
    }
}
const getLabelByName = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.getLabelByName(req.query.name)
        res.status(201).send(json)
    } catch (error) {
        console.log(error)
        res.status(500).redirect("/")
    }
}
const createLabel = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.createLabel(req.body)
        res.status(201).send(json)
    } catch (error) {
        console.log(error)
        res.status(500).redirect("/")
    }
}
const deleteLabel = async (req, res) => {
    try {
        if (validate(req, res) !== undefined) { return }
        const json = await service.deleteLabel(req.params.labelId)
        res.status(201).send(json)
    } catch (error) {
        console.log(error)
        res.status(500).redirect("/")
    }
}

export { getAllLabels, getLabelById, getLabelByName, createLabel, deleteLabel }