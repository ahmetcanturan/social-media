import express from "express"
import * as controller from "../controllers/postController.js"
import validator from "../validations/postValidator.js"

const router = express.Router()

router.get("/getAllPosts", controller.getAllPosts)
router.post("/create", [validator.createPost()], controller.createPost)
router.put("/updateById/:postId", [validator.paramValidateId(), validator.updatePost()], controller.updatePost)
router.delete("/deleteById/:postId", [validator.paramValidateId()], controller.deletePost)
export default router