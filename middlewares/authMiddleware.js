
import { verifyToken } from "../utils/index.js"

export default (req, res, next) => {
    try {
        if (!req.url.includes("/login")) {
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
        console.log(error)
        return res.status(400).json({
            message: "Invalid AUTHORIZED"
        })
    }
}