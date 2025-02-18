import { CustomError } from './custom.error';

/**
 * Custom error class to handle database connection errors.
 */
export class DatabaseConnectionError extends CustomError {
    /** @inheritdoc */
    statusCode: number = 500;
    /** The error message to be sent to the client. */
    reason: string = 'Error connecting to database';

    /**
     * Creates an instance of DatabaseConnectionError.
     */
    constructor() {
        super('Error connecting to db');

        // Only because we are extending a built-in class.
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    /** @inheritdoc */
    serializeErrors() {
        return [{ message: this.reason }];
    }
}
