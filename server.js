import express from "express"
import dbConnect from "./db/connect.js"
import dotenv from "dotenv"
import CreateTable from "./db/table_create.js"
import * as Routers from "./routers/index.js"
dotenv.config()


const app = express()
const router = express.Router()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//*Routers----------
app.use("/user", Routers.User)
app.use("/post", Routers.Post)


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

