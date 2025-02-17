/** App configuration. */
const config = {
    /** App debug mode. */
    debug: process.env.APP_DEBUG === 'true',
    /** App environment. */
    env: process.env.NODE_ENV || 'development',
    getDatabaseConfig: () => ({
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '3306'),
    }),
    /** The port to run the app on. */
    port: parseInt(process.env.PORT || '3000'),
};

export default config;
