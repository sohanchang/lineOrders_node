const line = require('@line/bot-sdk');
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
    buttonsImageURL = 'https://gam.jzm.mybluehost.me/pictures/line/0d50ed3b-f5ff-4a5a-bd81-bd35970e814c.png';
    msg1 ={
        type: 'template',
        altText: 'Carousel alt text',
        template: {
          type: 'carousel',
          columns: [
            {
              thumbnailImageUrl: buttonsImageURL,
              title: 'hoge',
              text: 'fuga',
              actions: [
                { label: 'Go to web', type: 'uri', uri: 'https://line.me' },
                { label: 'Say hello1', type: 'postback', data: 'hello こんにちは', text: 'hello 1' },
              ],
            },
            {
              thumbnailImageUrl: buttonsImageURL,
              title: 'hoge2',
              text: 'fuga2',
              actions: [
                { label: '言 hello2', type: 'postback', data: 'hello こんにちは', text: 'hello こんにちは' },
                { label: 'Say message', type: 'message', text: 'Rice=米' },
              ],
            },
          ],
        },
    }; 

    msg2 = {
        type: 'template',
        altText: 'Buttons alt text',
        template: {
          type: 'buttons',
          thumbnailImageUrl: buttonsImageURL,
          title: 'My button sample',
          text: 'Hello, my button',
          actions: [
            { label: '1: Go to line.me', type: 'uri', uri: 'https://www.google.com.tw' },
            { label: '2: Say hello1', type: 'postback', data: 'hello こんにちは' },
            { label: '3: 言 hello2', type: 'postback', data: 'hello こんにちは', text: 'hello こんにちは' },
            { label: '4: Say message', type: 'message', text: 'Rice=米' },
          ],
        },
      };

        msg = event.message.text;
        if (msg == '2go') {
        event.reply(msg2).then(function (data) {
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