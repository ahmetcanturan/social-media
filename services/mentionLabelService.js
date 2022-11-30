import Database from "../dal/DependencyInversion.js"

const database = new Database("mentionLabel")
const getAllMentionLabels = async () => {
    const mentionLabels = await database.db().getAll()
    return mentionLabels
}
const getMentionLabelById = async (id) => {
    const mentionLabel = await database.db().getById(id)
    const json = (mentionLabel == null) ? { data: "null", mentionLabel: "No Data" } : mentionLabel
    return json
}
const getMentionLabelsByMentionId = async (id) => {
    const mentionLabel = await database.db().findWhere({ mention_id: id })
    const json = (mentionLabel == null) ? { data: "null", mentionLabel: "No Data" } : mentionLabel
    return json
}
const getMentionLabelsByLabelId = async (id) => {
    const mentionLabel = await database.db().findWhere({ label_id: id })
    const json = (mentionLabel == null) ? { data: "null", mentionLabel: "No Data" } : mentionLabel
    return json
}
const createMentionLabel = async (data) => {
    const json = { mention_id: data.mention_id, label_id: data.label_id }
    const mentionLabel = await database.db().create(json)
    return mentionLabel
}
const deleteAMentionLabelById = async (id) => {
    const mentionLabel = await database.db().deleteById(id)
    return (mentionLabel.affectedRows > 0) ? mentionLabel : { status: false, mentionLabel: "Can not find mentionLabel " }
}
const deleteMentionLabelsByMentionId = async (id) => {
    const mentionLabel = await database.db().findWhere({ mention_id: id })
    if (mentionLabel == null) {
        return { status: false, mentionLabel: "Can not find mentionLabel " }
    }
    else {
        for (const iterator of mentionLabel) {
            await database.db().deleteById(iterator.Id)
        }
        return { status: true, message: "Succeed Deleted" }
    }
}
const deleteMentionLabelsByLabelId = async (id) => {
    const mentionLabel = await database.db().findWhere({ label_id: id })
    if (mentionLabel == null) {
        return { status: false, mentionLabel: "Can not find mentionLabel " }
    }
    else {
        for (const iterator of mentionLabel) {
            await database.db().deleteById(iterator.Id)
        }
        return { status: true, message: "Succeed Deleted" }
    }
}

export {
    getAllMentionLabels, getMentionLabelsByMentionId, getMentionLabelById,
    getMentionLabelsByLabelId, createMentionLabel, deleteAMentionLabelById,
    deleteMentionLabelsByMentionId, deleteMentionLabelsByLabelId
}