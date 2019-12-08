import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
    id: {
        primaryKey: true,
        type: Number
    },
    update_id: {
        type: Number
    },
    is_bot: {
        type: Boolean
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    username: {
        type: String
    },
    chat_id: {
        type: String
    },
    message_date: {
        type: String
    },
    original_text: {
        type: String
    }
});

const Request = mongoose.model('Request', requestSchema, 'requests');

export default Request;
