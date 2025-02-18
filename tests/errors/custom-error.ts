import { CustomError } from '../../src/errors/custom.error';

/**
 * Test error class. Needed to test the abstract class.
 */
export class TestError extends CustomError {
    /** @inheritdoc */
    statusCode = 400;

    /**
     * Creates an instance of TestError.
     * @param {string} message - The error message.
     */
    constructor(message: string) {
        super(message);

        // Only because we are extending a built-in class.
        Object.setPrototypeOf(this, TestError.prototype);
    }

    /** @inheritdoc */
    serializeErrors() {
        return [{ message: this.message }];
    }
}
