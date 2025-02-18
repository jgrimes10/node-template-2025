import config from './config';
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

const env = config.env;

let sequelizeOptions: SequelizeOptions = {
    ...config.getDatabaseConfig(),
    models: [__dirname + '/models'],
};

if (env === 'production') {
    sequelizeOptions = {
        ...sequelizeOptions,
        dialect: 'mysql',
    };
} else {
    sequelizeOptions = {
        ...sequelizeOptions,
        dialect: 'sqlite',
        storage: './database.sqlite',
    };
}

const sequelize = new Sequelize(sequelizeOptions);

export default sequelize;
