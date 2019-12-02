import aurora from "../database/aurora";
import * as Sequelize from "sequelize";

const attributes = {
    ok: {
        type: Sequelize.DataTypes.BOOLEAN
    },

    from_id: {
        type: Sequelize.DataTypes.NUMBER
    },

    from_is_bot: {
        type: Sequelize.DataTypes.BOOLEAN
    },

    from_username: {
        type: Sequelize.DataTypes.STRING
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

const Response = aurora.define('response', attributes);

export default Response;