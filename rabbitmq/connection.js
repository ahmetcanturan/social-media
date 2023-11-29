import { rabbitUser,rabbitPass } from "../configs/custom-environment-variable.js"
import amqp from "amqplib"


export default async () => {
    const connection = await amqp.connect({
        username: rabbitUser,
        password:rabbitPass,
    }).then(r => {
        console.log("RabbitMQ Connection Succeed")
        return r
    }).catch(r => { console.log("RabbitMQ Connection Failed!!") })
    return connection

}