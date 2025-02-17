import { CustomError } from './custom-error';

/**
 * Custom error class for not found errors.
 */
export class NotFoundError extends CustomError {
    /** @inheritdoc */
    statusCode = 404;

    /**
     * Constructor for the NotFoundError class.
     */
    constructor() {
        super('Route not found');

        // Only because we are extending a built-in class.
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    /** @inheritdoc */
    serializeErrors() {
        return [{ message: 'Not Found' }];
    }
}
