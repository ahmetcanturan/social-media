import { verifyToken } from "../utils/index.js"
import { exception } from "../logger/index.js"
import { accessible_endpoint, inaccessible_endpoint } from "../consts/index.js"
export default (req, res, next) => {
    try {
        let permOne = false
        let permTwo = false
        for (const endpoint of accessible_endpoint) {
            if (req.url.includes(endpoint)) {
                permOne = true
                for (const iterator of inaccessible_endpoint) {
                    if (req.url.includes(iterator)) {
                        permTwo = true
                    }
                }
            }
        }
        if (permOne == false || (permOne == true & permTwo == true)) {
            if (req?.headers?.authorization) {
                const token = req.headers.authorization.split(" ")[1]
                const decodedToken = verifyToken(token)
                if (decodedToken.decodedToken === null) {
                    return res.status(400).json({
                        message: "Invalid AUTHORIZED"
                    })
                }
            }
            else {
                return res.status(400).json({
                    message: "Invalid AUTHORIZED"
                })
            }
        }
        next()
    } catch (error) {
        exception(error, req)
        return res.status(400).json({
            message: "Invalid AUTHORIZED"
        })
    }
}