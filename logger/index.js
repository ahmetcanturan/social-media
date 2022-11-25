import fs from "fs"
import path from "path"
import { cwd } from "node:process"

const location = cwd()
var time = new Date()
const exception = async (error, req = "") => {
    console.log(error)
    const data = {
        Error: error, Request:
            { Ip: req?.ip, Url: req?.originalUrl, Method: req?.method, Body: req?.body, Params: req?.params, Query: req?.query },
        Time: `${time.toLocaleDateString("tr-TR")} - ${time.toLocaleTimeString("tr-TR")}`
    }
    const dir = path.join(location, `logs/exceptions/exceptions.txt`)
    if (!fs.existsSync(dir)) {
        const writeData = JSON.stringify(data, null, 4)
        fs.writeFileSync(dir, writeData)
    }
    else {
        const writeData2 = JSON.stringify(data, null, 4)
        fs.appendFileSync(dir, `,\n${writeData2}`)
    }
}
const logger = async (req) => {
    const data = {
        Request: { Ip: req?.ip, Url: req?.originalUrl, Method: req?.method, Body: req?.body, Params: req?.params, Query: req?.query },
        Time: `${time.toLocaleDateString("tr-TR")} - ${time.toLocaleTimeString("tr-TR")}`
    }
    const dir = path.join(location, `logs/request_logs/logs.txt`)
    if (!fs.existsSync(dir)) {
        const writeData = JSON.stringify(data, null, 4)
        fs.writeFileSync(dir, writeData)
    }
    else {
        const writeData2 = JSON.stringify(data, null, 4)
        fs.appendFileSync(dir, `,\n${writeData2}`)
    }
}

export { exception, logger }