import mysql from "mysql2"
import { sqlHost,sqlDatabase,sqlPass,sqlPool,sqlPort,sqlTimezone,sqlUser, } from "../configs/custom-environment-variable.js"
const connection = mysql.createConnection({
    host: sqlHost,
    user: sqlUser,
    password: sqlPass,
    waitForConnections: true,
    pool: sqlPool,
    charset: 'UTF8_GENERAL_CI',
    port: sqlPort,
    debug: false,
    timezone: sqlTimezone,
    database: sqlDatabase
})

export default connection