import fs from 'fs';
import path from 'path';
import winston from 'winston';
import config from '../config';

/** The directory where the logs will be stored. */
const logsDir = 'logs';
/** The file where the combined logs will be stored. */
const combinedLogFile = path.join(logsDir, 'combined.log');
/** The file where the error logs will be stored. */
const errorLogFile = path.join(logsDir, 'error.log');

// Ensure logs directory exists.
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

/** The transport options for the combined log file. */
const combinedFileOptions: winston.transports.FileTransportOptions = {
    level: 'info',
    filename: combinedLogFile,
    handleExceptions: true,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    maxsize: 5242880, // 5MB
    maxFiles: 5,
};

/** The transport options for the error log file. */
const errorFileOptions: winston.transports.FileTransportOptions = {
    level: 'error',
    filename: errorLogFile,
    handleExceptions: true,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    maxsize: 5242880, // 5MB
    maxFiles: 5,
};

/** The transport options for the console. */
const consoleOptions: winston.transports.ConsoleTransportOptions = {
    level: 'debug',
    handleExceptions: true,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize()
    ),
};

/** The logger instance. */
const logger = winston.createLogger({
    transports: [
        new winston.transports.File(combinedFileOptions),
        new winston.transports.File(errorFileOptions),
    ],
    // Do not exit on handled exceptions.
    exitOnError: false,
});

if (config.env !== 'production') {
    logger.add(new winston.transports.Console(consoleOptions));
}

export default logger;
