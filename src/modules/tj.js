var request = require('request');
var telegram = require('./telegram.js');
var tjtoken = require('../../../keys/tjtoken.js').tjtoken;


var tj = function(chat_id) {

    var options = {

        url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=tjournal&&count=5',

        headers: {

            'User-Agent': 'MomsPersonalName',

            'authorization': tjtoken,

            'Accept-Encoding': 'utf-16'
        }
    }

    request.get(options, function(error, response, body) {

        body = JSON.parse(body);

        var message = '5 последних новостей с TJ:\n\n';

        //parsing the response and composing the query

        body.forEach(function(tweet) {

            message += tweet.text + '\n\n';

        });

        telegram.send_message(chat_id, message);

    });

}



module.exports.tj = tj;
