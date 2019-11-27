require('dotenv').config();

import app from './src/index';

const port = process.env.PORT || 1337;

app.listen(port);

console.log(`Bot is running on port ${port}`);