import * as Sequelize from "sequelize";
import aurora from "../database/aurora";

const attributes = {
    update_id: {
        type: Sequelize.DataTypes.NUMBER
    },

    id: {
        type: Sequelize.DataTypes.NUMBER
    },

    is_bot: {
        type: Sequelize.DataTypes.BOOLEAN
    },

    first_name: {
        type: Sequelize.DataTypes.STRING
    },

    last_name: {
        type: Sequelize.DataTypes.STRING
    },

    username: {
        type: Sequelize.DataTypes.STRING
    },

    chat_id: {
        type: Sequelize.DataTypes.NUMBER
    },

    message_date: {
        type: Sequelize.DataTypes.DATE
    },

    original_text: {
        type: Sequelize.DataTypes.STRING
    }
};

const Request = aurora.define('request', attributes);

export default Request;
