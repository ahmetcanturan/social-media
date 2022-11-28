import Database from "../dal/DependencyInversion.js"

const database = new Database("mention")

const getAllMentions = async () => {
    const mentions = await database.db().getAll()
    return mentions
}
const getMentionById = async (id) => {
    const mention = await database.db().getById(id)
    const json = (mention == null) ? { data: "null", message: "No Data" } : mention
    return json
}
const getAllMentionsOfUserByUserId = async (id) => {
    const mention = await database.db().findWhere({ user_id: id })
    const json = (mention == null) ? { data: "null", message: "No Data" } : mention
    return json
}
const createMention = async (data) => {
    const json = { user_id: data.user_id, content: data.content, created_time: Date.now() }
    const mention = await database.db().create(json)
    return mention
}
const updateMention = async (id, data) => {
    const json = { content: data.content }
    const mention = await database.db().updateById(id, json)
    return mention
}
const deleteMention = async (id) => {
    const mention = await database.db().deleteById(id)
    return mention
}


export { getAllMentions, getMentionById, getAllMentionsOfUserByUserId, createMention, updateMention, deleteMention }