import amqp from "amqplib"
import dotenv from "dotenv"
dotenv.config()

export default async () => {
    const connection = await amqp.connect({
        username: process.env.RABBIT_USER,
        password: process.env.RABBIT_PASS,
    }).then(r => {
        console.log("RabbitMQ Connection Succeed")
        return r
    }).catch(r => { console.log("RabbitMQ Connection Failed!!") })
    return connection

}