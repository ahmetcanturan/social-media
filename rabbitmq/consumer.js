import connectionRabbitMQ from "./connection.js"
import { transporter, mailOptions } from "../services/mailService.js"
import dotenv from "dotenv"
dotenv.config()
const queue = "sendMail"
const onConsumeData = async () => {
    const connection = await connectionRabbitMQ()
    const channel = await connection.createChannel()
    await channel.assertQueue(queue)
    channel.consume(queue, (data) => {
        const to = JSON.parse(data.content.toString()).data
        transporter.sendMail(mailOptions(to), (error, info) => {
            if (error) {
                console.log(error)
            }
            else channel.ack(data)
        })
    })
}
onConsumeData()