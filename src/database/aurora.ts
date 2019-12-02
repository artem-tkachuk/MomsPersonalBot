import Sequelize from 'sequelize';

const config = {
    user     : process.env.RDS_USERNAME,
    password : process.env.RDS_PASSWORD,
    db       : process.env.RDS_DB_NAME
};

const aurora = new Sequelize.Sequelize(config.db!, config.user!, config.password!, {
    host: process.env.RDS_HOSTNAME,
    port: parseInt(process.env.RDS_PORT!)
});

export default aurora;


