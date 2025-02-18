import { CustomError } from './custom.error';

/**
 * Custom error class to handle route not found errors.
 */
export class NotFoundError extends CustomError {
    /** @inheritdoc */
    statusCode: number = 404;

    /**
     * Creates an instance of NotFoundError.
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
