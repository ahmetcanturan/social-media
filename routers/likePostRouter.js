import express from "express"
import * as controller from "../controllers/likePostController.js"
import * as validator from "../validations/index.js"
const router = express.Router()

router.get("/getAllLikes", controller.getAllLikes)
router.get("/getLikeById/:likeId", controller.getLikeById)
router.get("/getAllLikesOfPostByPostId/:postId", controller.getAllLikesOfPostByPostId)
router.get("/getAllLikedOfUserByUserId/:userId", controller.getAllLikedOfUserByUserId)
router.post("/create", [validator.Like.createLikePost()], controller.createLike)
router.delete("/deleteById/:likeId", controller.deleteLike)
export default router