import connectionRabbitMQ from "./connection.js"
//? Kuyruk ismi belirledik
const queue = "sendMail"
export default async (data) => {
    try {
        const connection = await connectionRabbitMQ()
        //? İsteği Exchange'e yollamak için channel oluşturuyoruz
        const channel = await connection.createChannel()
        //? kuyruğu başlatalım
        await channel.assertQueue(queue)
        //? datayı ilgili kuyruğa gönderelim
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)))
        console.log("Data added to queue!")
    } catch (error) {
        console.log("Rabbit Publisher Error:", error)
    }
}