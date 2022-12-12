import Database from "../dal/DependencyInversion.js"
const database = new Database("follower")

const getAllFollowers = async () => {
    const followers = await database.db().getAll()
    return followers
}
const getFollowerById = async (id) => {
    const follower = await database.db().getById(id)
    const json = (follower == null) ? { data: "null", message: "No Data" } : follower
    return json
}
const getFollowersByUserId = async (user_id) => {
    const follower = await database.db().findWhere({ user_id: user_id })
    const json = (follower == null) ? { data: "null", message: "No Data" } : follower
    return json
}
const getIFollowedByfollowedId = async (followed_id) => {
    const follower = await database.db().findWhere({ followed_id: followed_id })
    const json = (follower == null) ? { data: "null", message: "No Data" } : follower
    return json
}
const createFollower = async (data) => {
    const json = { user_id: data.user_id, followed_id: data.followed_id, created_time: Date.now() }
    const follower = await database.db().create(json)
    return follower
}
const isFollowed = async (data) => {
    const json = { user_id: data.user_id, followed_id: data.followed_id }
    const follower = await database.db().findMultipleCondition(`user_id=${json.user_id} AND followed_id=${json.followed_id}`)
    return follower
}
const deleteFollower = async (id) => {
    const follower = await database.db().deleteById(id)
    return follower
}
export { getAllFollowers, getFollowerById, getFollowersByUserId, getIFollowedByfollowedId, createFollower, isFollowed, deleteFollower }