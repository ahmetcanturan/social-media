import express from "express"
import * as controller from "../controllers//postLabelController.js"
import * as validator from "../validations/index.js"
const router = express.Router()

router.get("/getAllPostLabels", controller.getAllPostLabels)
router.get("/getPostLabelById/:postLabelId", controller.getPostLabelById)
router.get("/getPostLabelsByPostId/:postId", controller.getPostLabelsByPostId)
router.get("/getPostLabelsByLabelId/:labelId", controller.getPostLabelsByLabelId)
router.post("/create", [validator.Post.bodyValidateId(), validator.Label.bodyValidateId()], controller.createPostLabel)
router.delete("/deleteAPostLabelById/:postLabelId", controller.deleteAPostLabelById)
router.delete("/deletePostLabelsByPostId/:postId", controller.deletePostLabelsByPostId)
router.delete("/deletePostLabelsByLabelId/:labelId", controller.deletePostLabelsByLabelId)
export default router
