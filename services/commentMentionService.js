import Database from "../dal/DependencyInversion.js"

const database = new Database("commentmention")
const getAllComments = async () => {
    const comments = await database.db().getAll()
    return comments
}
const getCommentById = async (id) => {
    const comment = await database.db().getById(id)
    const json = (comment == null) ? { data: "null", message: "No Data" } : comment
    return json
}
const getAllCommentsOfMentionByMentionId = async (id) => {
    const comment = await database.db().findWhere({ mention_id: id })
    const json = (comment == null) ? { data: "null", message: "No Data" } : comment
    return json
}
const createComment = async (data) => {
    const json = { mention_id: data.mention_id, username: data.username, content: data.content, created_time: Date.now() }
    const comment = await database.db().create(json)
    return comment
}
const updateComment = async (id, data) => {
    const json = { content: data.content }
    const comment = await database.db().updateById(id, json)
    return (comment.affectedRows > 0) ? comment : { status: false, message: "Can not find comment " }
}
const deleteComment = async (id) => {
    const comment = await database.db().deleteById(id)
    return (comment.affectedRows > 0) ? comment : { status: false, message: "Can not find comment " }
}


export { getAllComments, getCommentById, getAllCommentsOfMentionByMentionId, createComment, updateComment, deleteComment }