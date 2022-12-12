import { logger } from "../logger/index.js"
export default (req, res, next) => {
    if (req.url.includes("user/create") || req.url.includes("user/login")) {
        const data = JSON.parse(JSON.stringify({ Ip: req?.ip, Url: req?.originalUrl, Method: req?.method, Body: req?.body, Params: req?.params, Query: req?.query }))
        data.Body.password = "***"
        logger(data)
    }
    else logger(req)
    next()
}