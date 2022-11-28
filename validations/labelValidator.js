import { body, query, param } from 'express-validator'
import Database from "../dal/DependencyInversion.js"
const database = new Database("label")
const Validator = {
    createLabel() {
        return [
            body('name')
                .notEmpty({ ignore_whitespace: true }).withMessage("You must write a name")
                .isLength({ min: 1, max: 15 }).withMessage("Name must include 1-15 characters")
                .custom(async (value, { req }) => {
                    let lower = value.toLocaleLowerCase('TR')
                    const result = await database.db().findOne({ name: lower })
                    if (result) throw new Error("Already exist")
                    return true
                }),
        ]
    },
    paramValidateId() {
        return [
            param('labelId').isNumeric().withMessage("Invalid Id")
                .custom(async (value, { req }) => {
                    const result = await database.db().getById(value)
                    if (!result) throw new Error("Invalid Id")
                    return true
                })
        ]
    },
    nameValid() {
        return [
            query("name").isString().withMessage("You must write a  string name")
                .isLength({ min: 1, max: 15 }).withMessage("Name must include 1-15 characters")
        ]
    }
}

export default Validator