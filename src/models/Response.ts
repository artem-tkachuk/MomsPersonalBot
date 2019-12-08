import mongoose from 'mongoose';

const responseSchema = new mongoose.Schema({
    ok: {
        type: Boolean
    },
    from_id: {
        type: Number
    },
    from_is_bot: {
        type: Boolean
    },
    from_username: {
        type: String
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
        type: Number
    },
    message_date: {
        type: Date
    },
    original_text: {
        type: String
    }
});

const Response = mongoose.model('Response', responseSchema, 'responses');

export default Response;