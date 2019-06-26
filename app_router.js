const express = require('express');
const linebot = require('linebot');
var app = module.exports = express();

const bot = linebot({
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_TOKEN
});

const linebotParser = bot.parser();

// Redirect linebot webhook url to linebot parser
app.post('/linewebhook', linebotParser);

bot.on('message', function (event) {
    // if (source.userId) {
    //     return client.getProfile(source.userId)
    //       .then((profile) => replyText(
    //         replyToken,
    //         [
    //           `Display name: ${profile.displayName}`,
    //           `Status message: ${profile.statusMessage}`,
    //         ]
    //       ));
    //   } else {
    //     return replyText(replyToken, 'Bot can\'t use profile API without user ID');
    //   };
        msg = event.message.text;
        if (msg == '2go') {
        event.reply(event.message.text+"test  OK!  ").then(function (data) {
                            console.log('Success', data);
                        }).catch(function (error) {
                             console.log('Error', error);
                             });         
                            }

});



//Express API --------- App.get('path', callback function);
//routes HTTP GET requests to the specified path with the specified callback functions
app.get('/', function (request, response) {
    response.json({ message: 'response from node service!' });
});

app.post('/ajax', function (request, response) {
    response.send("response by ajax");
});