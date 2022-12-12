import express from "express"
import * as controller from "../controllers/likeMentionController.js"
import * as validator from "../validations/index.js"
const router = express.Router()

router.get("/getAllLikes", controller.getAllLikes)
router.get("/getLikeById/:likeId", controller.getLikeById)
router.get("/getAllLikesOfMentionByMentionId/:mentionId", controller.getAllLikesOfMentionByMentionId)
router.get("/getAllLikedOfUserByUserId/:userId", controller.getAllLikedOfUserByUserId)
router.post("/create", [validator.Like.createLikeMention()], controller.createLike)
router.delete("/deleteById/:likeId", controller.deleteLike)
export default router