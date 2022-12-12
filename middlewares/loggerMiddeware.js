import { logger } from "../logger/index.js"

export default (req, res, next) => {
    console.log(req.url.includes("user/create") || req.url.includes("user/login"))
    if (req.url.includes("user/create") || req.url.includes("user/login")) {
        const data = Object.assign({}, req)
        data.body.password = "***"
        logger(data)
    }
    else logger(req)
    next()
}