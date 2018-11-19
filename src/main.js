#!/usr/bin/env nodejs
const http = require('http');
const request = require('request');

const token = "657188946:AAHLFiecpDW264B9E8bd2_HAUJHFlqwixU8";

const server = http.createServer(function(req, res) {

	if (req.method == 'POST') {

		var body = '';

		req.on('data', function (data) {

			body += data

			if (body.length > 1e6) {

				req.connection.destroy();

			}
		});

		req.on('end', function() {

			body = JSON.parse(body);

			var chat_id = body.message.chat.id;

			var URL = 'https://api.telegram.org/bot' + token + '/' + "sendmessage?" + "chat_id=" + chat_id + "&" + "text=Бот уже работает круглосуточно и скоро сможет выполнять все свои функции!!!";

			let options = {

				url: URL,

    				method: 'GET',

    				headers: {

        				"encoding": "text/html;charset='charset=utf-8'"

    				}

			};

			request(options, function(err, res, body) {

				let json_response = JSON.parse(body);

    				console.log(json_response);
			});

		});




	}

});

server.listen(8443, 'localhost');
