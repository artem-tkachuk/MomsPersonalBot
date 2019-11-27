import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes/routes';
import get404 from "./controllers/404";

const Index = express();

Index.use(bodyParser.urlencoded({extended: false}));
Index.use(bodyParser.json());

Index.use(routes);
Index.use(get404);

export default Index;

//TODO rename tokens to capital letters
//TODO deploy to Azure

