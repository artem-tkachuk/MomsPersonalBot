import App from './src/App';

const port = process.env.PORT || 1337;

App.listen(port);

console.log(`Bot is running on port ${port}`);