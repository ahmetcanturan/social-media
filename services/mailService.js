import nodemailer from "nodemailer"

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
const mailOptions = (to) => {
    return {
        from: "perrotal.andre@yandex.com.tr",
        to: to,
        subject: `Kayıt işleminiz başarılı!`,
        html: `<h1>Merhaba Kayıt işleminiz tamamlanmıştır.</h1>`
    }
}

export { transporter, mailOptions }