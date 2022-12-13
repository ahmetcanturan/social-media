import Database from "../dal/DependencyInversion.js"
import CacheManager from "../dal/cacheManager.js"
const database = new Database("mention")
const cache = new CacheManager("mention")

const getAllMentions = async () => {
    const _mentions = await cache.getAll()
    if (_mentions) { return _mentions }
    else {
        const mentions = await database.db().getAll()
        cache.reCreate()
        return mentions
    }
}
const getMentionById = async (id) => {
    const _mention = await cache.getById(id)
    if (_mention) { return _mention }
    else {
        const mention = await database.db().getById(id)
        const json = (mention == null) ? { data: "null", message: "No Data" } : mention
        cache.reCreate()
        return json
    }
}
const getAllMentionsOfUserByUserId = async (id) => {
    const _mention = await cache.findWhere({ user_id: id })
    if (_mention) { return _mention }
    else {
        const mention = await database.db().findWhere({ user_id: id })
        const json = (mention == null) ? { data: "null", message: "No Data" } : mention
        cache.reCreate()
        return json
    }
}
const createMention = async (data) => {
    const json = { user_id: data.user_id, content: data.content, created_time: Date.now() }
    const mention = await database.db().create(json)
    cache.reCreate()
    return mention
}
const updateMention = async (id, data) => {
    const json = { content: data.content }
    const mention = await database.db().updateById(id, json)
    cache.reCreate()
    return mention
}
const deleteMention = async (id) => {
    const mention = await database.db().deleteById(id)
    cache.reCreate()
    return mention
}
export { getAllMentions, getMentionById, getAllMentionsOfUserByUserId, createMention, updateMention, deleteMention }