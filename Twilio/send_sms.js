require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Hello World',
        from: '+13436001454',
        to: '+16138694049'
    })
    .then(message => console.log(message.sid));