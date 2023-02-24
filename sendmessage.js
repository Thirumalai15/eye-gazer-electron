const twilio = require('twilio')
const twilioSid = 'AC2536a7152850c8792bcc00c4be946d63';
const authToken = '3ef6ddc098a4ace08aefc5bdc7328db4';

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

function makeSosCall(params) {
    const client = twilio(twilioSid, authToken, {
        httpOptions: {
            headers: {
                'User-Agent': 'Twilio Node.js/3.60.0'
            }
        }
    });


    client.calls
        .create({
            twiml: 'https://demo.twilio.com/docs/voice.xml',
            to: '+916383679570',
            from: '+15025863781'
        })
        .then(call => console.log(call.sid));

}
