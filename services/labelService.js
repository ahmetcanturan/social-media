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
const createLabel = async (data) => {
    const json = { name: data.name.toLocaleLowerCase('TR') }
    const label = await Label.create(json)
    return label
}

// const deletePost = async (id) => {
//     const post = await Post.deleteById(id)
//     return post
// }


export { getAllLabels, getLabelById, createLabel }