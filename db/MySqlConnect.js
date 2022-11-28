import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config()
const connection = mysql.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    waitForConnections: true,
    pool: process.env.SQL_POOL,
    charset: 'UTF8_GENERAL_CI',
    port: process.env.SQL_PORT,
    debug: false,
    timezone: process.env.SQL_TIMEZONE,
    database: process.env.SQL_DATABASE
})

export default connection