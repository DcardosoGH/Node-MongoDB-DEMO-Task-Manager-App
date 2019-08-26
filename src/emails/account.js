const sgmail = require('@sendgrid/mail')

sgmail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=> {
    sgmail.send({
        to: email,
        from: 'diogo.g.c@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}


const sendCancelationEmail = (email, name)=> {
    sgmail.send({
        to: email,
        from: 'diogo.g.c@gmail.com',
        subject: 'We are sad to see you go!',
        text: `Goodbye, ${name}. We hope to see you sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}