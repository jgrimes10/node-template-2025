import sequelize from './db-connection';
import { add } from './utils';

(async () => {
    await sequelize.sync();
    console.log('sum', add(1, 2));
})();
