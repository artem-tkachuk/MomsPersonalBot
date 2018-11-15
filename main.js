const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8443;

app.use(bodyParser.json());

app.post('/', function(req, res) {

	var message = req.body.message;

	console.log(message);  //optional

});


app.listen(port, () => console.log(`App listening on port ${port}!`));
