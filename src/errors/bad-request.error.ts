import { CustomError } from './custom.error';

export class BadRequestError extends CustomError {
    /** @inheritdoc */
    statusCode: number = 400;

    /**
     * Creates an instance of BadRequestError.
     * @param {string} message The error message.
     */
    constructor(public message: string) {
        super(message);

        // Only because we are extending a built-in class.
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    /** @inheritdoc */
    serializeErrors(): { message: string; field?: string }[] {
        return [{ message: this.message }];
    }
}
