import sequelize from './db-connection';
import { createServer } from './server';
import logger from './middleware/logger';
import config from './config';

const server = createServer();

(async () => {
    await sequelize.sync();

    server.listen(config.port, () => {
        logger.info(`Server is running on port ${config.port}`);
    });
})();
