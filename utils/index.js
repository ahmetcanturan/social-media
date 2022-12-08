import { validationResult } from "express-validator"
import md5 from "md5"
import dns from "dns"
import os from "os"
const forUpdate = (keys) => {
    const list = []
    for (const key of Object.keys(keys)) {
        list.push(key + "=?")
    }
    return list
}
const validate = (req, res) => {
    try {
        const validationErrors = validationResult(req)
        if (validationErrors.isEmpty() === false) {
            return res.status(401).json({
                data: null, error: true, validationErrors: validationErrors.array(),
                success: false, message: "Geçersiz Veri", timestamp: Date.now(),
            })
        }
    } catch (error) {
        console.log("içeride hata var")
    }

}
const hashToPassword = (password) => {
    return md5(password)
}

const getHost = (path) => {
    return new Promise((resolve) => {
        dns.lookup(os.hostname(), (err, ip) => {
            resolve(`http://${ip}:${process.env.PORT}/${path}`)
        })
    })
}

export { forUpdate, validate, hashToPassword, getHost }