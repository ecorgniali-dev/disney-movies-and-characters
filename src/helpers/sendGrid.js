const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY } = require('../config/config');

sgMail.setApiKey(SENDGRID_API_KEY);

function sendEmail(username, email) {

    const msg = {
        to: email, // Change to your recipient
        from: 'ecorgniali@sinacod.com', // Change to your verified sender
        subject: 'Welcome to the disney characters API',
        html: `
            <h2>Hello ${username} 👋</h2>
            <p>We welcome you to the wonderful world of <strong>Disney characters.</strong></p>
            <p>Thanks for signing up!</p>
        `,
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent!')
        })
        .catch((error) => {
            console.error(error)
        })

}

module.exports = { sendEmail }
