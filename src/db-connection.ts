import config from './config';
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
    ...config.getDatabaseConfig(),
    dialect: 'mysql',
    models: [__dirname + '/models'],
});

export default sequelize;
