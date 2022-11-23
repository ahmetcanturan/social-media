import Label from "../dal/LabelDal.js"

const getAllLabels = async () => {
    const labels = await Label.getAll()
    return labels
}
const getLabelById = async (id) => {
    const label = await Label.getById(id)
    const json = (label == null) ? { data: "null", message: "No Data" } : label
    return json
}
const getLabelByName = async (name) => {
    const label = await Label.findOne({ name: name.toLocaleLowerCase('TR') })
    const json = (label == null) ? { data: "null", message: "No Data" } : label
    return json
}
const createLabel = async (data) => {
    const json = { name: data.name.toLocaleLowerCase('TR') }
    const label = await Label.create(json)
    return label
}

const deleteLabel = async (id) => {
    const label = await Label.deleteById(id)
    return label
}


export { getAllLabels, getLabelById, getLabelByName, createLabel, deleteLabel }