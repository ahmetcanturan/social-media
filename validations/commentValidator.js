import { body, query, param } from 'express-validator'
import Database from "../dal/DependencyInversion.js"

const User = new Database("user")
const Post = new Database("post")
const Mention = new Database("mention")

const CommentValidator = {
    createComment() {
        return [
            body('post_id')
                .custom(async (value, { req }) => {
                    if (value == null) return true
                    else {
                        const result = await Post.db().getById(value)
                        if (!result) throw new Error("Invalid Id")
                        return true
                    }
                }),
            body('mention_id')
                .custom(async (value, { req }) => {
                    if (value == null) return true
                    else {
                        const result = await Mention.db().getById(value)
                        if (!result) throw new Error("Invalid Id")
                        return true
                    }
                }),
            body('username')
                .notEmpty({ ignore_whitespace: true }).withMessage("You must write an username")
                .custom(async (value, { req }) => {
                    const result = await User.db().findOne({ username: value })
                    if (!result) throw new Error("Invalid Username")
                    return true
                }),
            body('content')
                .notEmpty({ ignore_whitespace: true }).withMessage("You must write a content")
                .isLength({ min: 1, max: 100 }).withMessage("Content must include 1-100 characters"),
        ]
    },
    updateComment() {
        return [
            body('content')
                .notEmpty({ ignore_whitespace: true }).withMessage("You must write a content")
                .isLength({ min: 1, max: 100 }).withMessage("Content must include 1-100 characters"),
        ]
    }
}

export default CommentValidator