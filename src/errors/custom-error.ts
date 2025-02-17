/**
 * Custom abstract class for errors.
 */
export abstract class CustomError extends Error {
    /** The status code of the error. */
    abstract statusCode: number;

    /**
     * Constructor for the CustomError class.
     * @param {string} message - The error message.
     */
    protected constructor(message: string) {
        super(message);

        // Only because we are extending a built-in class.
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    /**
     * Serialize the errors.
     * @returns {object[]} - The serialized errors.
     */
    abstract serializeErrors(): { message: string; field?: string }[];
}
