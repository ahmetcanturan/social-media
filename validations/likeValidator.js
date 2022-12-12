import { body, query, param } from 'express-validator'
import Database from "../dal/DependencyInversion.js"


const User = new Database("user")
const Post = new Database("post")
const Mention = new Database("mention")

const LikeValidator = {
    createLikePost() {
        return [
            body('post_id').isNumeric().withMessage("Invalid post_id")
                .custom(async (value, { req }) => {
                    if (value == null) return true
                    else {
                        const result = await Post.db().getById(value)
                        if (!result) throw new Error("Invalid post_id")
                        return true
                    }
                }),
            body('user_id').isNumeric().withMessage("Invalid user_id")
                .custom(async (value, { req }) => {
                    if (value == null) return true
                    else {
                        const result = await User.db().getById(value)
                        if (!result) throw new Error("Invalid user_id")
                        return true
                    }
                })
        ]
    },
    createLikeMention() {
        return [
            body('mention_id').isNumeric().withMessage("Invalid mention_id")
                .custom(async (value, { req }) => {
                    if (value == null) return true
                    else {
                        const result = await Mention.db().getById(value)
                        if (!result) throw new Error("Invalid post_id")
                        return true
                    }
                }),
            body('user_id').isNumeric().withMessage("Invalid user_id")
                .custom(async (value, { req }) => {
                    if (value == null) return true
                    else {
                        const result = await User.db().getById(value)
                        if (!result) throw new Error("Invalid user_id")
                        return true
                    }
                })
        ]
    }
}

export default LikeValidator