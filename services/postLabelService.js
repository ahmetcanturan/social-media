import Database from "../dal/DependencyInversion.js"

const database = new Database("postLabel")
const getAllPostLabels = async () => {
    const postLabels = await database.db().getAll()
    return postLabels
}
const getPostLabelById = async (id) => {
    const postLabel = await database.db().getById(id)
    const json = (postLabel == null) ? { data: "null", postLabel: "No Data" } : postLabel
    return json
}
const getPostLabelsByPostId = async (id) => {
    const postLabel = await database.db().findWhere({ post_id: id })
    const json = (postLabel == null) ? { data: "null", postLabel: "No Data" } : postLabel
    return json
}
const getPostLabelsByLabelId = async (id) => {
    const postLabel = await database.db().findWhere({ label_id: id })
    const json = (postLabel == null) ? { data: "null", postLabel: "No Data" } : postLabel
    return json
}
const createPostLabel = async (data) => {
    const json = { post_id: data.post_id, label_id: data.label_id }
    const postLabel = await database.db().create(json)
    return postLabel
}
const deleteAPostLabelById = async (id) => {
    const postLabel = await database.db().deleteById(id)
    return (postLabel.affectedRows > 0) ? postLabel : { status: false, postLabel: "Can not find postLabel " }
}
const deletePostLabelsByPostId = async (id) => {
    const postLabel = await database.db().findWhere({ post_id: id })
    if (postLabel == null) {
        return { status: false, postLabel: "Can not find postLabel " }
    }
    else {
        for (const iterator of postLabel) {
            await database.db().deleteById(iterator.Id)
        }
        return { status: true, message: "Succeed Deleted" }
    }
}
const deletePostLabelsByLabelId = async (id) => {
    const postLabel = await database.db().findWhere({ label_id: id })
    if (postLabel == null) {
        return { status: false, postLabel: "Can not find postLabel " }
    }
    else {
        for (const iterator of postLabel) {
            await database.db().deleteById(iterator.Id)
        }
        return { status: true, message: "Succeed Deleted" }
    }
}

export {
    getAllPostLabels, getPostLabelsByPostId, getPostLabelById,
    getPostLabelsByLabelId, createPostLabel, deleteAPostLabelById,
    deletePostLabelsByPostId, deletePostLabelsByLabelId
}