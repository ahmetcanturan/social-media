import express from "express"
import * as controller from "../controllers/commentPostController.js"
import * as validator from "../validations/index.js"
const router = express.Router()

router.get("/getAllComments", controller.getAllComments)
router.get("/getCommentById/:CommentId", controller.getCommentById)
router.get("/getAllCommentsOfPostByPostId/:postId", controller.getAllCommentsOfPostByPostId)
router.post("/create", [validator.Comment.createComment()], controller.createComment)
router.put("/updateById/:commentId", [validator.Comment.updateComment()], controller.updateComment)
router.delete("/deleteById/:commentId", controller.deleteComment)
export default router