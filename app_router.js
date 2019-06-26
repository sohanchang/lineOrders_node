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
 //   switch (event.type) {
 //       case 'message':
 //         const messagecont = event.message;
          switch (event.message.text) {
            case 'text':
 //             switch (message.text){
 //               case 'test': 
                event.reply(event.message.text+" 003!").then(function (data) {
                            console.log('Success', data);
                        }).catch(function (error) {
                             console.log('Error', error);
                             });           
                //  return handleText(message, event.replyToken, event.source);
                default:
                  throw new Error(`Unknown message text: ${JSON.stringify(message)}`);    
              }
 //           default:
  //            throw new Error(`Unknown message: ${JSON.stringify(message)}`);
  //          } 
  //      default:
  //        throw new Error(`Unknown event: ${JSON.stringify(event)}`);
  //      }                  
//    event.reply(event.message.text+" 001!").then(function (data) {
//        console.log('Success', data);    
//    }).catch(function (error) {
//        console.log('Error', error);
//    });
});



//Express API --------- App.get('path', callback function);
//routes HTTP GET requests to the specified path with the specified callback functions
app.get('/', function (request, response) {
    response.json({ message: 'response from node service!' });
});

app.post('/ajax', function (request, response) {
    response.send("response by ajax");
});

