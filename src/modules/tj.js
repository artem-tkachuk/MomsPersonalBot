var request = require('request');

var telegram = require('./telegram.js');

var tj = function(chat_id) {

    var options = {

        path: '/1.1/statuses/user_timeline.json?count=1&screen_name=tjournal HTTPS/1.1',

        host: 'api.twitter.com',

        authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAE5U9gAAAAAAXiTbVNTs8PVRBEtCO6KSn4j4Mtg%3DZiyjD1FHdEC7W4ogoO5ru66U0uAFbsco1DAciHafEjn7G1CkT0',

    }


    request.get(options, function(error, response, body) {

       body = JSON.parse(body);

       //parsing the text

       var message = "There will be parsed text of message";

       telegram.send_message(48018875, body);

       //telegram.send_message(chat_id, message);

    });

}


module.exports.tj = tj;