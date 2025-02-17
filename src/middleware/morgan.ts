import morgan, { StreamOptions } from 'morgan';
import logger from './logger';

/** The type of logging that Morgan will use. */
const morganSetting = 'combined';

/** The stream options for Morgan. */
const stream: StreamOptions = {
    write: (message) => logger.info(message.trim()),
};

/** The skip function for Morgan. */
const skip = (): boolean => {
    const env = process.env.NODE_ENV || 'development';

    // Skip logging in non-development environments.
    return env !== 'development';
};

/** The Morgan middleware. */
const morganMiddleware = morgan(morganSetting, { stream, skip });

export default morganMiddleware;