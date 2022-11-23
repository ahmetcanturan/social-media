import express from "express"
import * as controller from "../controllers/labelController.js"
import * as validator from "../validations/index.js"
const router = express.Router()
router.get("/getAllLabels", controller.getAllLabels)
router.get("/getLabelById/:labelId", [validator.Label.paramValidateId()], controller.getLabelById)
router.post("/create", [validator.Label.createLabel()], controller.createLabel)
// router.delete("/deleteById/:postId", [validator.Post.paramValidateId()], controller.deletePost)
export default router