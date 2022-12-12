import { body, query, param } from 'express-validator'
import Database from "../dal/DependencyInversion.js"

const User = new Database("user")
const Follower = new Database("follower")

const followerValidator = {
    createFollower() {
        return [
            body('user_id').isNumeric().withMessage("user_id is invalid!")
                .custom(async (value, { req }) => {
                    const result = await User.db().getById(value)
                    if (!result) throw new Error("user_id is invalid!")
                    return true
                }),
            body('followed_id').isNumeric().withMessage("followed_id is invalid!")
                .custom(async (value, { req }) => {
                    const result = await User.db().getById(value)
                    if (!result) throw new Error("followed_id is invalid!")
                    return true
                })
                .custom(async (value, { req }) => {
                    if (req?.body?.user_id == value) throw new Error("user_id and followed_id can't be same!")
                    return true
                })
        ]
    },
    paramValidateId() {
        return [
            param("followerId")
                .isNumeric().withMessage("follower_id is invalid!")
                .custom(async (value, { req }) => {
                    const result = await Follower.db().getById(value)
                    if (!result) throw new Error("follower_id is invalid!")
                    return true
                })
        ]
    }
}
export default followerValidator