import app from './src/index';
import mongo from "./src/database/mongo";

const port = parseInt(process.env.PORT!) || 3000;

mongo(app, port);