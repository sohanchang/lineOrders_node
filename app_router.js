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
    var gmessagetext = event.message.text;
    switch (gmessagetext){
        case "T1":
            event.reply(event.message.text+" Ya!  01").then(function (data) {
                console.log('Success', data);
            }).catch(function (error) {
                console.log('Error', error);
            });  
        break;
        case "T3":
            event.reply(event.message.text+" Ya!  03").then(function (data) {
                console.log('Success', data);
            }).catch(function (error) {
                console.log('Error', error);
            });  
        break;
        case "T5":
            event.reply(event.message.text+" Ya!  05").then(function (data) {
                console.log('Success', data);
            }).catch(function (error) {
                console.log('Error', error);
            });  
        break;
        case "T7":
            event.reply(event.message.text+" Ya!  07").then(function (data) {
                console.log('Success', data);
            }).catch(function (error) {
                console.log('Error', error);
            });  
        break;
        default:
            event.reply(event.message.text).then(function (data) {
                console.log('Success', data);
            }).catch(function (error) {
                console.log('Error', error);
            });
    }
});    

bot.on('message', function (event) {
    event.reply(event.message.text+" Ya!").then(function (data) {
        console.log('Success', data);
    }).catch(function (error) {
        console.log('Error', error);
    });
});

//Express API --------- App.get('path', callback function);
//routes HTTP GET requests to the specified path with the specified callback functions
app.get('/', function (request, response) {
    response.json({ message: 'response from node service!' });
});

app.post('/ajax', function (request, response) {
    response.send("response by ajax");
});
