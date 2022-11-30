import express from "express"
import * as controller from "../controllers/mentionLabelController.js"
import * as validator from "../validations/index.js"
const router = express.Router()

router.get("/getAllMentionLabels", controller.getAllMentionLabels)
router.get("/getMentionLabelById/:mentionLabelId", controller.getMentionLabelById)
router.get("/getMentionLabelsByMentionId/:mentionId", controller.getMentionLabelsByMentionId)
router.get("/getMentionLabelsByLabelId/:labelId", controller.getMentionLabelsByLabelId)
router.post("/create", [validator.Mention.bodyValidateId(), validator.Label.bodyValidateId()], controller.createMentionLabel)
router.delete("/deleteAMentionLabelById/:mentionLabelId", controller.deleteAMentionLabelById)
router.delete("/deleteMentionLabelsByMentionId/:mentionId", controller.deleteMentionLabelsByMentionId)
router.delete("/deleteMentionLabelsByLabelId/:labelId", controller.deleteMentionLabelsByLabelId)
export default router
