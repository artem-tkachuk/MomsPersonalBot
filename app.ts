import app from './src/index';
import aurora from "./src/database/aurora";

const port = process.env.PORT || 1337;

aurora.sync()
    .then(result => {
        app.listen(port);
    });

console.log(`Bot is running on the default port ${port}`);