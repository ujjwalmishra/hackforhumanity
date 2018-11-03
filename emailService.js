const express = require('express')
const app = express()
const port = 3001


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
const sendEmail = function(res) {
    const sendmail = require('sendmail')();
 
sendmail({
    from: 'erica@minniefoodpantry.com',
    to: 'fouyen@gmail.com',
    subject: 'Christmas Give Away 20 Dec, 2018',
    html: 'Please contribute to upcoming event by donating here "http://donation.com/pay"',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
    if(!err) {
        res.send('Email sent successfully')    
    }
});
}

const sendText = function(res) {
    var accountSid = 'ACc4809089bb57042b52eb57f846d04f51'; // Your Account SID from www.twilio.com/console
var authToken = 'fdde7fa9a994973ea3b7e679a694781d';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
console.log("sending text")
client.messages.create({
    body: 'Kindly donate by clicking on this url "http://donate"',
    to: '+16692259193',  // Text this number
    from: '+19375193903' // From a valid Twilio number
})
.then((message) => 
{
    console.log(message)
res.send('Text sent successfully')
}).done();

}
app.get('/', (req, res) => {
    sendText(res);
})

app.get('/email', (req, res) => {
    sendEmail(res);
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))