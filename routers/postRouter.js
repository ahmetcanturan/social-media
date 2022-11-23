import express from "express"
import * as controller from "../controllers/postController.js"
import * as validator from "../validations/index.js"
const router = express.Router()

router.get("/getAllPosts", controller.getAllPosts)
router.get("/getPostById/:postId", [validator.Post.justValidateId()], controller.getPostById)
router.get("/getAllPostsOfUserByUserId/:userId", [validator.User.paramValidateId()], controller.getAllPostsOfUserByUserId)
router.post("/create", [validator.Post.createPost()], controller.createPost)
router.put("/updateById/:postId", [validator.Post.paramValidateId(), validator.Post.updatePost()], controller.updatePost)
router.delete("/deleteById/:postId", [validator.Post.paramValidateId()], controller.deletePost)
export default router