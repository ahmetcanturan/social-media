import { port,secretKey,expresIn } from "../configs/custom-environment-variable.js"
import { validationResult } from "express-validator"
import md5 from "md5"
import dns from "dns"
import os from "os"
import jwt from "jsonwebtoken"
import fs from "fs"

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
            resolve(`http://${ip}:${port}/${path}`.replace("\\", "/"))
        })
    })
}

const createToken = (userId, username, email) => {
    const token = jwt.sign({
        userId,
        username,
        email
    }, secretKey, {
        issuer: "localhost",
        expiresIn: expresIn
    })
    return token
}
const verifyToken = (token) => {
    const isVerify = { decodedToken: null }
    try {
        const decodedToken = jwt.verify(token,secretKey)
        isVerify.decodedToken = decodedToken
    } catch (error) {
        isVerify.decodedToken = null
    }
    return isVerify
}

const fileDelete = (path) => {
    console.log(path)
    const route = path.replace("\\", "/")
    if (fs.existsSync(route)) {
        fs.unlink(route, (err) => {
            if (err) console.log(err)
        })
    }
}

export { forUpdate, validate, hashToPassword, getHost, createToken, verifyToken, fileDelete }