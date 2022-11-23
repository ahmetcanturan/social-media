import { body, query, param } from 'express-validator'
import Label from '../dal/labelDal.js'
const Validator = {
    createLabel() {
        return [
            body('name')
                .notEmpty({ ignore_whitespace: true }).withMessage("You must write a name")
                .isLength({ min: 1, max: 15 }).withMessage("Name must include 1-15 characters")
                .custom(async (value, { req }) => {
                    let lower = value.toLocaleLowerCase('TR')
                    const result = await Label.findOne({ name: lower })
                    if (result) throw new Error("Already exist")
                    return true
                }),
        ]
    },
    paramValidateId() {
        return [
            param('labelId').isNumeric().withMessage("Invalid Id")
                .custom(async (value, { req }) => {
                    const result = await Label.getById(value)
                    if (!result) throw new Error("Invalid Id")
                    return true
                })
        ]
    }
}

export default Validator