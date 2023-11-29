import dotenv from "dotenv"
dotenv.config()

export const port = process.env.PORT
export const sqlHost = process.env.SQL_HOST
export const sqlUser = process.env.SQL_USER
export const sqlPass = process.env.SQL_PASS
export const sqlPool = process.env.SQL_POOL
export const sqlPort = process.env.SQL_PORT
export const sqlTimezone = process.env.SQL_TIMEZONE
export const sqlDatabase = process.env.SQL_DATABASE
export const secretKey = process.env.SECRET_KEY
export const expresIn = process.env.EXPIRESIN
export const rabbitUser = process.env.RABBIT_USER
export const rabbitPass = process.env.RABBIT_PASS
export const mailUser = process.env.MAIL_USER
export const mailPass = process.env.MAIL_PASS