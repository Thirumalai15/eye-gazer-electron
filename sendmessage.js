const twilio = require('twilio')
const twilioSid = 'AC2536a7152850c8792bcc00c4be946d63';
const authToken = '743b54b2eb3a340ca3c0a5ac15eda31b';


function sendSosAlert() {
    // console.log()
    const client = twilio(twilioSid, authToken, {
        httpOptions: {
            headers: {
                'User-Agent': 'Twilio Node.js/3.60.0'
            }
        }
    });
    client.messages
        .create({
            from: 'whatsapp:+14155238886',
            body: "Test message for eye gazer",
            to: 'whatsapp:+917092935107',
        }).then(message => {
            let help_message = document.getElementById('help_message');
            help_message.classList.remove('hidden');
            console.log(message.sid)
        }).catch(err => {
            console.log(err)
        })
}
