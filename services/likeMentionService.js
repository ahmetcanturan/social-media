import Database from "../dal/DependencyInversion.js"

const database = new Database("likemention")

const getAllLikes = async () => {
    const likes = await database.db().getAll()
    return likes
}
const getLikeById = async (id) => {
    const like = await database.db().getById(id)
    const json = (like == null) ? { data: "null", message: "No Data" } : like
    return json
}
const getAllLikesOfMentionByMentionId = async (id) => {
    const like = await database.db().findWhere({ mention_id: id })
    const json = (like == null) ? { data: "null", message: "No Data" } : like
    return json
}
const getAllLikedOfUserByUserId = async (id) => {
    const like = await database.db().findWhere({ user_id: id })
    const json = (like == null) ? { data: "null", message: "No Data" } : like
    return json
}
const createLike = async (data) => {
    const json = { mention_id: data.mention_id, user_id: data.user_id, created_time: Date.now() }
    const like = await database.db().create(json)
    return like
}
const isLiked = async (data) => {
    const json = { user_id: data.user_id, mention_id: data.mention_id }
    const like = await database.db().findMultipleCondition(`user_id=${json.user_id} AND mention_id=${json.mention_id}`)
    return like
}
const deleteLike = async (id) => {
    const like = await database.db().deleteById(id)
    return (like.affectedRows > 0) ? like : { status: false, message: "Can not find Like " }
}


export { getAllLikes, getLikeById, getAllLikesOfMentionByMentionId, getAllLikedOfUserByUserId, createLike, isLiked, deleteLike }