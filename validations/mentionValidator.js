import { body, query, param } from 'express-validator'
import Database from "../dal/DependencyInversion.js"

const User = new Database("user")
const Mention = new Database("mention")

const Validator = {
    createMention() {
        return [
            body('user_id').isNumeric().withMessage("Invalid user_id")
                .custom(async (value, { req }) => {
                    const result = await User.db().getById(value)
                    if (!result) throw new Error("Invalid user_id")
                    return true
                }),
            body('content')
                .notEmpty({ ignore_whitespace: true }).withMessage("You must write a content")
                .isLength({ min: 1, max: 1200 }).withMessage("Content_path must include 1-1200 characters"),
        ]
    },
    updateMention() {
        return [
            body('content')
                .notEmpty({ ignore_whitespace: true }).withMessage("You must write a content")
                .isLength({ min: 1, max: 1200 }).withMessage("Content_path must include 1-1200 characters"),
        ]
    },
    paramValidateId() {
        return [
            param('mentionId').isNumeric().withMessage("Invalid Id")
                .custom(async (value, { req }) => {
                    const result = await Mention.db().getById(value)
                    if (!result) throw new Error("Invalid Id")
                    return true
                })
        ]
    },
    bodyValidateId() {
        return [
            body('mention_id').isNumeric().withMessage("Invalid Id")
                .custom(async (value, { req }) => {
                    const result = await Mention.db().getById(value)
                    if (!result) throw new Error("Invalid Id")
                    return true
                })
        ]
    },
    userIdValid() {
        return [
            param('userId').isNumeric().withMessage("Invalid Id")
                .custom(async (value, { req }) => {
                    const result = await User.db().getById(value)
                    if (!result) throw new Error("Invalid Id")
                    return true
                })
        ]
    }
}

export default Validator