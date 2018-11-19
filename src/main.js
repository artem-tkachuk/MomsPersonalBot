#!/usr/bin/env nodejs
const http = require('http');
const request = require('request');

const token = '743783565:AAEOkLQpG4_3j9cvkcw8vassWt5LBd7ehKU';

const server = http.createServer(function(req, res) {

        var curr_update = 0;

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
                        console.log(body);

                        update_id = body.update_id;

                        if (update_id != curr_update)   {

                              curr_update = update_id;

                              var chat = body.message.chat.id;

                              var URL = 'https://api.telegram.org/bot' + token + '/' + "sendmessage";

                              let options = {

                                    url: URL,

                                    form: {

                                          chat_id: chat,

                                          text: "Бот уже работает круглосуточно, но пока ничего не умеет! Скоро он исправится"

                                    }

                              };

                              request.post(options, function(err, res, body) {

                                    let json_response = JSON.parse(body);

                                    console.log(json_response);

                              });
                        }

                });

      }

});

server.listen(8443, 'localhost');
