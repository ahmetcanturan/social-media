import Database from "../dal/DependencyInversion.js"

const database = new Database("label")

const getAllLabels = async () => {
    const labels = await database.db().getAll()
    return labels
}
const getLabelById = async (id) => {
    const label = await database.db().getById(id)
    const json = (label == null) ? { data: "null", message: "No Data" } : label
    return json
}
const getLabelByName = async (name) => {
    const label = await database.db().findOne({ name: name.toLocaleLowerCase('TR') })
    const json = (label == null) ? { data: "null", message: "No Data" } : label
    return json
}
const createLabel = async (data) => {
    const json = { name: data.name.toLocaleLowerCase('TR') }
    const label = await database.db().create(json)
    return label
}
const deleteLabel = async (id) => {
    const label = await database.db().deleteById(id)
    return label
}
export { getAllLabels, getLabelById, getLabelByName, createLabel, deleteLabel }