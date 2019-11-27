import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes/routes';
import get404 from "./controllers/404";

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(routes);
app.use(get404);

export default app;

//TODO rename tokens to capital letters
//TODO check if typescript actually compiles on each commit

