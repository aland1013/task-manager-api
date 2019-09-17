const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'adam.land@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
};

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'adam.land@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. We are sorry to see you have deleted your account.  Is there anything we could have done better to keep you?`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
};