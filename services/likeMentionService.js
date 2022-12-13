import Database from "../dal/DependencyInversion.js"
import CacheManager from "../dal/cacheManager.js"
const database = new Database("likemention")
const cache = new CacheManager("likemention")

const getAllLikes = async () => {
    const cache_data = await cache.getAll()
    if (cache_data) { return cache_data }
    else {
        const likes = await database.db().getAll()
        cache.reCreate()
        return likes
    }
}
const getLikeById = async (id) => {
    const cache_data = await cache.getById(id)
    if (cache_data) { return cache_data }
    else {
        const like = await database.db().getById(id)
        const json = (like == null) ? { data: "null", message: "No Data" } : like
        cache.reCreate()
        return json
    }
}
const getAllLikesOfMentionByMentionId = async (id) => {
    const cache_data = await cache.findWhere({ mention_id: id })
    if (cache_data) { return cache_data }
    else {
        const like = await database.db().findWhere({ mention_id: id })
        const json = (like == null) ? { data: "null", message: "No Data" } : like
        cache.reCreate()
        return json
    }
}
const getAllLikedOfUserByUserId = async (id) => {
    const cache_data = await cache.findWhere({ user_id: id })
    if (cache_data) { return cache_data }
    else {
        const like = await database.db().findWhere({ user_id: id })
        const json = (like == null) ? { data: "null", message: "No Data" } : like
        cache.reCreate()
        return json
    }
}
const createLike = async (data) => {
    const json = { mention_id: data.mention_id, user_id: data.user_id, created_time: Date.now() }
    const like = await database.db().create(json)
    cache.reCreate()
    return like
}
const isLiked = async (data) => {
    const cache_data = await cache.findMultipleConditionAND({ user_id: data.user_id, mention_id: data.mention_id })
    if (cache_data) { return cache_data }
    else {
        const json = { user_id: data.user_id, mention_id: data.mention_id }
        const like = await database.db().findMultipleCondition(`user_id=${json.user_id} AND mention_id=${json.mention_id}`)
        cache.reCreate()
        return like
    }
}
const deleteLike = async (id) => {
    const like = await database.db().deleteById(id)
    cache.reCreate()
    return (like.affectedRows > 0) ? like : { status: false, message: "Can not find Like " }
}


export { getAllLikes, getLikeById, getAllLikesOfMentionByMentionId, getAllLikedOfUserByUserId, createLike, isLiked, deleteLike }