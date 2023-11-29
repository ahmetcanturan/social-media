import { port } from "./configs/custom-environment-variable.js"
import express from "express"
import MySqlConnect from "./db/MySqlConnect.js"
import MySqlTableCreate from "./db/MySqlTableCreate.js"
import * as Routers from "./routers/index.js"
import logger from "./middlewares/loggerMiddeware.js"
import auth from "./middlewares/authMiddleware.js"
import { exception } from "./logger/index.js"
import cors from "cors"
import helmet from "helmet"
import { createClient } from "redis"


const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use("/uploads", express.static("uploads"))


//* Logger-Middleware
app.use(logger)
app.use(auth)
//*Routers----------
app.use("/user", Routers.User)
app.use("/post", Routers.Post)
app.use("/label", Routers.Label)
app.use("/mention", Routers.Mention)
app.use("/comment/mention", Routers.CommentMention)
app.use("/comment/post", Routers.CommentPost)
app.use("/message", Routers.Message)
app.use("/postLabel", Routers.PostLabel)
app.use("/mentionLabel", Routers.MentionLabel)
app.use("/follower", Routers.Follower)
app.use("/likepost", Routers.LikePost)
app.use("/likemention", Routers.LikeMention)

app.use((req, res) => {
    res.json({ status: false, message: "invalid request" }).status(404)
})
app.listen(port, () => {
    console.log(`${port}. Port is Activated..`)
    MySqlConnect.connect((err) => {
        if (err) {
            console.log('MySQL Connection Error', err)
            exception(err)
        }
        else {
            console.log('MySQL Connected..')
            MySqlTableCreate()
        }
    })
})
