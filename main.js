#!/usr/bin/env nodejs


//	1. Переделать GET-запросы в POST-запросы
//	2. Сделать sendmessage через HTTPS или любым другим доступным способом
//	3. Залить на сервер DigitalOcean с репозитория GitLab
//	4. Установить Webhook с Телеграма



const http = require('http');
const request = require('request');

const token = "657188946:AAHLFiecpDW264B9E8bd2_HAUJHFlqwixU8";

const server = http.createServer(function(req, res) {

	if (req.method == 'POST') {

		var body = '';

		req.on('data', function (data) {

			body += data;

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

		request(url, function(error, response, body) {

			console.log(body);

		});


	}

});

server.listen(8443, 'localhost');
