/**
 * Custom abstract error class.
 */
export abstract class CustomError extends Error {
    /** The status code to be sent to the client. */
    abstract statusCode: number;

    /**
     * Creates an instance of CustomError.
     * @param {string} message - The error message.
     */
    protected constructor(message: string) {
        super(message);

        // Only because we are extending a built-in class.
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    /**
     * Serializes the error.
     * @returns {object[]} - An array of error objects.
     */
    abstract serializeErrors(): { message: string; field?: string }[];
}
