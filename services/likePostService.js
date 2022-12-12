import Database from "../dal/DependencyInversion.js"

const database = new Database("likepost")

const getAllLikes = async () => {
    const likes = await database.db().getAll()
    return likes
}
const getLikeById = async (id) => {
    const like = await database.db().getById(id)
    const json = (like == null) ? { data: "null", message: "No Data" } : like
    return json
}
const getAllLikesOfPostByPostId = async (id) => {
    const like = await database.db().findWhere({ post_id: id })
    const json = (like == null) ? { data: "null", message: "No Data" } : like
    return json
}
const getAllLikedOfUserByUserId = async (id) => {
    const like = await database.db().findWhere({ user_id: id })
    const json = (like == null) ? { data: "null", message: "No Data" } : like
    return json
}
const createLike = async (data) => {
    const json = { post_id: data.post_id, user_id: data.user_id, created_time: Date.now() }
    const like = await database.db().create(json)
    return like
}
const isLiked = async (data) => {
    const json = { user_id: data.user_id, post_id: data.post_id }
    const like = await database.db().findMultipleCondition(`user_id=${json.user_id} AND post_id=${json.post_id}`)
    return like
}
const deleteLike = async (id) => {
    const like = await database.db().deleteById(id)
    return (like.affectedRows > 0) ? like : { status: false, message: "Can not find Like " }
}


export { getAllLikes, getLikeById, getAllLikesOfPostByPostId, getAllLikedOfUserByUserId, createLike, isLiked, deleteLike }