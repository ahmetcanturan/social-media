import { body, query, param } from 'express-validator'
import User from "../dal/userDal.js"
import Post from "../dal/postDal.js"
const postValidator = {
    createPost() {
        return [
            body('user_id')
                .isNumeric().withMessage("Invalid Id")
                .custom(async (value, { req }) => {
                    const result = await User.getById(value)
                    if (!result) throw new Error("Invalid Id")
                    return true
                }),
            body('title')
                .notEmpty({ ignore_whitespace: true }).withMessage("You must write a title")
                .isLength({ min: 1, max: 15 }).withMessage("Title must include 1-15 characters"),
            body('content_path')
                .notEmpty({ ignore_whitespace: true }).withMessage("You must write a content_path")
                .isLength({ min: 3, max: 100 }).withMessage("Content_path must include 3-100 characters"),
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
                    const result = await Post.getById(value)
                    if (!result) throw new Error("Invalid Id")
                    return true
                })

        ]
    }


}

export default postValidator