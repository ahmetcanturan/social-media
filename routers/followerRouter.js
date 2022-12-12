import express from "express"
import * as controller from "../controllers/FollowerController.js"
import * as validator from "../validations/index.js"
const router = express.Router()
router.get("/getAllFollowers", controller.getAllFollowers)
router.get("/getFollowerById/:followerId", controller.getFollowerById)
router.get("/getFollowersByUserId/:userId", controller.getFollowersByUserId)
router.get("/getIFollowedByfollowedId/:followedId", controller.getIFollowedByfollowedId)
router.post("/create", [validator.Follower.createFollower()], controller.createFollower)
router.delete("/deleteById/:followerId", [validator.Follower.paramValidateId()], controller.deleteFollower)
export default router