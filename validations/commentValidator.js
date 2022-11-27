import { body, query, param } from 'express-validator'
import Mention from '../dal/mentionDal.js'
import Post from "../dal/postDal.js"
import User from "../dal/userDal.js"
const CommentValidator = {
    createComment() {
        return [
            body('post_id')
                .custom(async (value, { req }) => {
                    if (value == null) return true
                    else {
                        const result = await Post.getById(value)
                        if (!result) throw new Error("Invalid Id")
                        return true
                    }
                }),
            body('mention_id')
                .custom(async (value, { req }) => {
                    if (value == null) return true
                    else {
                        const result = await Mention.getById(value)
                        if (!result) throw new Error("Invalid Id")
                        return true
                    }
                }),
            body('username')
                .notEmpty({ ignore_whitespace: true }).withMessage("You must write an username")
                .custom(async (value, { req }) => {
                    const result = await User.findOne({ username: value })
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
    },
    justValidateId() {
        return [
            param('CommentId').isNumeric().withMessage("Invalid Id")
        ]
    },
    paramValidateId() {
        return [
            param('CommentId').isNumeric().withMessage("Invalid Id")
                .custom(async (value, { req }) => {
                    const result = await Comment.getById(value)
                    if (!result) throw new Error("Invalid Id")
                    return true
                })

        ]
    }


}

export default CommentValidator