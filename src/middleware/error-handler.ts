import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

/**
 * Error handler middleware.
 * @param {Error} err - The error object.
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} _next - The next function.
 * @returns {Response} - The response object.
 */
export const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
): Response => {
    // If the error is a custom error, return the serialized errors.
    if (err instanceof CustomError) {
        return res
            .status(err.statusCode)
            .send({ errors: err.serializeErrors() });
    }

    // Otherwise, return a generic error message.
    return res.status(500).send({
        errors: [{ message: 'Something went wrong' }],
    });
};
