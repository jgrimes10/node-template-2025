import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom.error';

/**
 * Middleware to handle errors.
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
    if (err instanceof CustomError) {
        return res
            .status(err.statusCode)
            .send({ errors: err.serializeErrors() });
    }

    return res.status(500).send({
        errors: [{ message: 'Something went wrong' }],
    });
};
