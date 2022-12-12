import { logger } from "../logger/index.js"
export default (req, res, next) => {
    if (req.url.includes("user/create") || req.url.includes("user/login")) {
        const data = JSON.parse(JSON.stringify({ ip: req?.ip, url: req?.originalUrl, method: req?.method, body: req?.body, params: req?.params, query: req?.query }))
        data.body.password = "***"
        logger(data)
    }
    else logger(req)
    next()
}