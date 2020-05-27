require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail(email: string, token: string) {
    const msg = {
        to: email,
        from: 'mail@benshapirobuttinjeanspics.',
        subject: 'VUD Email Stuff',
        text: 'You wanted a thing to happen so click this to make it happen',
        html: `<a href="${process.env.ENV_URL}/${token}">${process.env.ENV_URL}/${token}</a>`,
      };
      sgMail.send(msg);
}
