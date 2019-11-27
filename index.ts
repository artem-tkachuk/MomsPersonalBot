import App from './src/App';

const port = process.env.PORT || 3000;

App.listen(port);

console.log(`Bot is running on port ${port}`);