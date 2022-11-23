import express from "express"
import * as controller from "../controllers/labelController.js"
import * as validator from "../validations/index.js"
const router = express.Router()
router.get("/getAllLabels", controller.getAllLabels)
router.get("/getLabelById/:labelId", [validator.Label.paramValidateId()], controller.getLabelById)
router.get("/getLabelByName/", [validator.Label.nameValid()], controller.getLabelByName)
router.post("/create", [validator.Label.createLabel()], controller.createLabel)
router.delete("/deleteById/:labelId", [validator.Label.paramValidateId()], controller.deleteLabel)
export default router