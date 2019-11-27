import app from './src/index';

const port = process.env.PORT || 1337;

app.listen(port);

console.log(`Bot is running on port ${port}`);
const KEY = process.env.ACCESS_CURRENCY_KEY; //api access key
console.log(KEY);