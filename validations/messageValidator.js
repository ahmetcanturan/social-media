import { body, query, param } from 'express-validator'
import Database from "../dal/DependencyInversion.js"

const User = new Database("user")


const Validator = {
    create() {
        return [
            body('sender_id').isNumeric().withMessage("Invalid sender_id")
                .custom(async (value, { req }) => {
                    const result = await User.db().getById(value)
                    if (!result) throw new Error("Invalid user_id")
                    return true
                }),
            body('receiver_id').isNumeric().withMessage("Invalid receiver_id")
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
}

export default Validator