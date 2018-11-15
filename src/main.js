#!/usr/bin/env nodejs
const http = require('http')
const qs = require('querystring');

const token = "657188946:AAHLFiecpDW264B9E8bd2_HAUJHFlqwixU8";

const server = http.createServer(function(req, res) {

	if (req.method == 'POST') {

		var body = '';
		var context = '';

		req.on('data', function (data) {

			body += data

			if (body.length > 1e6) {

				req.connection.destroy();

			}
		});

		req.on('end', function() {

			message = JSON.parse(body);

			console.log(message);

		});


		chat_id = message.chat.id;

		var url = 'https://api.telegra.org/bot' + token + '/' + "sendmessage?" + "chat_id=" + chat_id + "&" + "text=Бот уже работает круглосуточно и скоро сможет выполнять все свои функции!!!";

		http.get(url)

	}

});

server.listen(8443, 'localhost');
