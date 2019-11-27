import Index from './src/index';

const port = process.env.PORT || 1337;

Index.listen(port);

console.log(`Bot is running on port ${port}`);