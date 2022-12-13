import Database from "../dal/DependencyInversion.js"
import CacheManager from "../dal/cacheManager.js"
const database = new Database("follower")
const cache = new CacheManager("follower")

const getAllFollowers = async () => {
    const cache_data = await cache.getAll()
    if (cache_data) { return cache_data }
    else {
        const followers = await database.db().getAll()
        cache.reCreate()
        return followers
    }
}
const getFollowerById = async (id) => {
    const cache_data = await cache.getById(id)
    if (cache_data) { return cache_data }
    else {
        const follower = await database.db().getById(id)
        const json = (follower == null) ? { data: "null", message: "No Data" } : follower
        cache.reCreate()
        return json
    }
}

const getFollowersByUserId = async (user_id) => {
    const cache_data = await cache.findWhere({ user_id: user_id })
    if (cache_data) { return cache_data }
    else {
        const follower = await database.db().findWhere({ user_id: user_id })
        const json = (follower == null) ? { data: "null", message: "No Data" } : follower
        cache.reCreate()
        return json
    }
}
const getIFollowedByfollowedId = async (followed_id) => {
    const cache_data = await cache.findWhere({ followed_id: followed_id })
    if (cache_data) { return cache_data }
    else {
        const follower = await database.db().findWhere({ followed_id: followed_id })
        const json = (follower == null) ? { data: "null", message: "No Data" } : follower
        cache.reCreate()
        return json
    }
}

const createFollower = async (data) => {
    const json = { user_id: data.user_id, followed_id: data.followed_id, created_time: Date.now() }
    const follower = await database.db().create(json)
    cache.reCreate()
    return follower
}
const isFollowed = async (data) => {
    const cache_data = await cache.findMultipleConditionAND({ user_id: data.user_id, followed_id: data.followed_id })
    if (cache_data) { return cache_data }
    else {
        const json = { user_id: data.user_id, followed_id: data.followed_id }
        const follower = await database.db().findMultipleCondition(`user_id=${json.user_id} AND followed_id=${json.followed_id}`)
        cache.reCreate()
        return follower
    }

}
const deleteFollower = async (id) => {
    const follower = await database.db().deleteById(id)
    cache.reCreate()
    return follower
}
export { getAllFollowers, getFollowerById, getFollowersByUserId, getIFollowedByfollowedId, createFollower, isFollowed, deleteFollower }