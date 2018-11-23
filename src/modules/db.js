var mysql = require('mysql');

var user = require('../../../keys/mysql.js').user;
var password = require('../../../keys/mysql.js').password;


var make_record = function(body, type) {

    con = mysql.createConnection({

        host: "localhost",

        user: "artem", //change

        password: "A2705002020t@", //change

        database: "MomsPersonalBot"

    });


    con.connect(function(err) {

        if (err) {

                console.log("Did not log " +
                    (type == "Responses" ?
                        "response to = " + body.result.chat.id :
                            "request with update_id = " + body.update_id));


        }


        var props = (type == "Responses") ? {

                ok: body.ok,

                from_id: body.result.from.id,

                from_is_bot: body.result.from.is_bot,

                from_username: body.result.from.username,

                chat_id: body.result.chat.id,

                first_name: body.result.chat.first_name,

                last_name: body.result.chat.last_name,

                username: body.result.chat.username,

                message_date: body.result.date,

                original_text: body.result.text

            } : {

                update_id: body.update_id,

                id: body.message.from.id,

                is_bot: body.message.from.is_bot,

                first_name: body.message.from.first_name,

                last_name: body.message.from.last_name,

                username: body.message.from.username,

                chat_id: body.message.chat.id,

                message_date: body.message.date,

                original_text: body.message.text

            };


        var sql_query = "INSERT INTO " + (type == "Reponses" ? "Responses": "Requests") + "(";

        for (var x in props) {

            sql_query += x + ",";

        }

        sql_query = sql_query.substr(0, sql_query.length - 1) + ") ";

        sql_query += "VALUES(";

        for (var y in props) {

            sql_query += props[y] + ",";

        }

        sql_query = sql_query.substr(0, sql_query.length - 1) + ");";

        con.query(sql_query, function(err, result) {

            if (err) {

                console.log("Did not log " +
                    (type == "Responses" ?
                        "response to = " + body.result.chat.id :
                            "request with update_id = " + body.update_id));

            }

        });

    });

};


module.exports = {

    make_record: make_record

};
