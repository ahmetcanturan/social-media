import { logger } from "../logger/index.js"
export default (req, res, next) => {
    if (req.url.includes("user/create")) {
        const data = { ...req }
        data.body.password = "***"
        logger(data)
    }
    else logger(req)
    next()
}