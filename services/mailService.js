import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

const transporter = nodemailer.createTransport({
    direct: true,
    host: 'smtp.yandex.com',
    port: 465,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
    secure: true
})

const mailOptions = {
    // Ben domain'imi yandex'e bağladığım için cagatay.me olarak belirttim.
    from: process.env.MAIL_USER,
    to: 'ahmtcntrn@hotmail.com',
    subject: `Burası başlık kısmı`,
    text: `Buraya text girebilirsiniz..`,
    html: `<h1>Buraya html girebilirsiniz.</h1>`
}

export { transporter, mailOptions }