import express from "express"
import dbConnect from "./db/connect.js"
import dotenv from "dotenv"
import CreateTable from "./db/table_create.js"
import * as Routers from "./routers/index.js"
import logger from "./middlewares/loggerMiddeware.js"
dotenv.config()


const app = express()
const router = express.Router()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//* Logger-Middleware
app.use(logger)

//*Routers----------
app.use("/user", Routers.User)
app.use("/post", Routers.Post)
app.use("/label", Routers.Label)
app.use("/mention", Routers.Mention)

app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT}. Port is Activated..`)
    dbConnect.connect((err) => {
        if (err) {
            console.log('MySQL Connection Error', err)
        }
        else {
            console.log('MySQL Connected..')
            CreateTable()
        }
    })
})

