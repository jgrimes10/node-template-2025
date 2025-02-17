import sequelize from './db-connection';
import { add } from './utils';
import {createServer} from "./server";
import logger from "./middleware/logger";
import config from "./config";

const server = createServer();

(async () => {
    await sequelize.sync();
    console.log('sum', add(1, 2));

    server.listen(config.port, () => {
        logger.info(`Server is running on port ${config.port}`);
    })
})();
