class MailService {
    async sendActivationLink(to, link) {
        console.log(to, ' ', link)
    }
}

export default new MailService()