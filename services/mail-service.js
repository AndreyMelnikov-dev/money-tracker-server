import nodemailer from 'nodemailer'

class MailService {

    async sendActivationLink(to, link) {

        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.MAIL_FULL_ADDRESS, // sender address
            to: to, // list of receivers
            subject: "Hello, it`s time to confirm your account!", // Subject line
            html: `
                <h1>Hello!</h1>
                <h2>Confirm yout account!</h2>
                <a href="${process.env.SERVER_URL}:${process.env.PORT}/api/activate/${link}">
                    <b>Click here to confirm your account</b>
                </a>
            `
        });
    }

}

export default new MailService()