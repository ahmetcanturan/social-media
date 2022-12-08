import { body, query, param } from 'express-validator'
import Database from "../dal/DependencyInversion.js"

const User = new Database("user")
const Post = new Database("post")
const postValidator = {
    createPost() {
        return [
            body('user_id')
                .isNumeric().withMessage("Invalid Id")
                .custom(async (value, { req }) => {
                    const result = await User.db().getById(value)
                    if (!result) throw new Error("Invalid Id")
                    return true
                }),
            body('title')
                .notEmpty({ ignore_whitespace: true }).withMessage("You must write a title")
                .isLength({ min: 1, max: 45 }).withMessage("Title must include 1-45 characters"),
        ]
    },
    updatePost() {
        return [
            body('title')
                .notEmpty({ ignore_whitespace: true }).withMessage("You must write a title")
                .isLength({ min: 1, max: 15 }).withMessage("Title must include 1-15 characters"),
        ]
    },
    justValidateId() {
        return [
            param('postId').isNumeric().withMessage("Invalid Id")
        ]
    },
    paramValidateId() {
        return [
            param('postId').isNumeric().withMessage("Invalid Id")
                .custom(async (value, { req }) => {
                    const result = await Post.db().getById(value)
                    if (!result) throw new Error("Invalid Id")
                    return true
                })

        ]
    },
    bodyValidateId() {
        return [
            body('post_id').isNumeric().withMessage("Invalid Id")
                .custom(async (value, { req }) => {
                    const result = await Post.db().getById(value)
                    if (!result) throw new Error("Invalid Id")
                    return true
                })

        ]
    }



}

export default postValidator