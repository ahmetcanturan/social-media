import express from "express"
import * as controller from "../controllers/mentionController.js"
import * as validator from "../validations/index.js"
const router = express.Router()
router.get("/getAllMentions", controller.getAllMentions)
router.get("/getMentionById/:mentionId", [validator.Mention.paramValidateId()], controller.getMentionById)
router.get("/getAllMentionsOfUserByUserId/:userId", [validator.Mention.userIdValid()], controller.getAllMentionsOfUserByUserId)
router.post("/create", [validator.Mention.createMention()], controller.createMention)
router.put("/updateById/:mentionId", [validator.Mention.updateMention()], controller.updateMention)
router.delete("/deleteById/:mentionId", [validator.Mention.paramValidateId()], controller.deleteMention)
export default router