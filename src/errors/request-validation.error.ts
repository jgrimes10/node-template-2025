import { ZodError } from 'zod';
import { CustomError } from './custom.error';

/**
 * Custom error class to handle request validation errors.
 */
export class RequestValidationError extends CustomError {
    /** @inheritdoc */
    statusCode: number = 400;

    /**
     * Creates an instance of RequestValidationError.
     * @param {ValidationError[]} errors - An array of validation errors.
     */
    constructor(public errors: ZodError) {
        super('Invalid request parameters');

        // Only because we are extending a built-in class.
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    /** @inheritdoc */
    serializeErrors() {
        return this.errors.issues.map((issue) => {
            // Convert Zod's path array to dot-notation string if available.
            const field =
                issue.path.length > 0 ? issue.path.join('.') : undefined;

            return {
                message: issue.message,
                ...(field && { field }), // Only include field if it exists.
            };
        });
    }
}
