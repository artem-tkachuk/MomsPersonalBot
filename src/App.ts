import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes/routes';
import get404 from "./controllers/404";

const App = express();

App.use(bodyParser.urlencoded({extended: false}));
App.use(bodyParser.json());

App.use(routes);
App.use(get404);

export default App;

//TODO rename tokens to capital letters
//TODO deploy to Azure

