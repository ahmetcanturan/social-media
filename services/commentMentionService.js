import Comment from "../dal/commentMentionDal.js"

const getAllComments = async () => {
    const comments = await Comment.getAll()
    return comments
}
const getCommentById = async (id) => {
    const comment = await Comment.getById(id)
    const json = (comment == null) ? { data: "null", message: "No Data" } : comment
    return json
}
const getAllCommentsOfMentionByMentionId = async (id) => {
    const comment = await Comment.findWhere({ mention_id: id })
    const json = (comment == null) ? { data: "null", message: "No Data" } : comment
    return json
}
const createComment = async (data) => {
    const json = { mention_id: data.mention_id, username: data.username, content: data.content, created_time: Date.now() }
    const comment = await Comment.create(json)
    return comment
}
const updateComment = async (id, data) => {
    const json = { content: data.content }
    const comment = await Comment.updateById(id, json)
    return (comment.affectedRows > 0) ? comment : { status: false, message: "Can not find comment " }
}
const deleteComment = async (id) => {
    const comment = await Comment.deleteById(id)
    return (comment.affectedRows > 0) ? comment : { status: false, message: "Can not find comment " }
}


export { getAllComments, getCommentById, getAllCommentsOfMentionByMentionId, createComment, updateComment, deleteComment }