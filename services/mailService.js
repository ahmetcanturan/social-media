import { mailUser,mailPass } from "../configs/custom-environment-variable.js"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    direct: true,
    host: 'smtp.yandex.com',
    port: 465,
    auth: {
        user: mailUser,
        pass: mailPass
    },
    secure: true
})
const mailOptions = (to) => {
    return {
        from: mailUser,
        to: to,
        subject: `Kayıt işleminiz başarılı!`,
        html: `<h1>Merhaba Kayıt işleminiz tamamlanmıştır.</h1>`
    }
}

export { transporter, mailOptions }