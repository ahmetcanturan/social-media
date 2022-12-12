import express from "express"
import * as controller from "../controllers/userController.js"
import validator from "../validations/userValidator.js"

const router = express.Router()

router.post("/login", controller.getAllUsers)
router.get("/getAllUsers", controller.getAllUsers)
router.get("/getUserById/:userId", [validator.paramValidateId()], controller.getUserById)
router.post("/create", [validator.createUser()], controller.createUser)
router.put("/updateById/:userId", [validator.paramValidateId(), validator.updateUser()], controller.updateUser)
router.delete("/deleteById/:userId", [validator.paramValidateId()], controller.deleteUser)
export default router