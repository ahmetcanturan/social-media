import Mention from "../dal/mentionDal.js"

const getAllMentions = async () => {
    const mentions = await Mention.getAll()
    return mentions
}
const getMentionById = async (id) => {
    const mention = await Mention.getById(id)
    const json = (mention == null) ? { data: "null", message: "No Data" } : mention
    return json
}
const getAllMentionsOfUserByUserId = async (id) => {
    const mention = await Mention.findWhere({ user_id: id })
    const json = (mention == null) ? { data: "null", message: "No Data" } : mention
    return json
}
const createMention = async (data) => {
    const json = { user_id: data.user_id, content: data.content, created_time: Date.now() }
    const mention = await Mention.create(json)
    return mention
}
const updateMention = async (id, data) => {
    const json = { content: data.content }
    const mention = await Mention.updateById(id, json)
    return mention
}
const deleteMention = async (id) => {
    const mention = await Mention.deleteById(id)
    return mention
}


export { getAllMentions, getMentionById, getAllMentionsOfUserByUserId, createMention, updateMention, deleteMention }