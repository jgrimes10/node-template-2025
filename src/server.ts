import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';
import morganMiddleware from './middleware/morgan';
import { NotFoundError } from './errors/not-found.error';
import { errorHandler } from './middleware/error-handler';
import { router } from './routes';

export const createServer = () => {
    const app = express();
    app.disable('x-powered-by') // disable x-powered-by header so that attackers don't know what server is running
        .use(morganMiddleware)
        .use(express.urlencoded({ extended: true }))
        .use(express.json())
        .use(cors());

    app.use('/api', router);

    // Catch all for unknown routes.
    app.all('/*', async () => {
        throw new NotFoundError();
    });

    // Error handler.
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        errorHandler(err, req, res, next);
    });

    return app;
};
