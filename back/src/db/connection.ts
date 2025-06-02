import { Sequelize } from 'sequelize';

const sequelize = new Sequelize ('activeclassroom', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize