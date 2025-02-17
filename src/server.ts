import express, { Request, Response } from 'express';
import cors from 'cors';
import morganMiddleware from "./middleware/morgan";

export const createServer = () => {
    const app = express();
    app
        .disable("x-powered-by") // disable x-powered-by header so that attackers don't know what server is running
        .use(morganMiddleware)
        .use(express.urlencoded({ extended: true }))
        .use(express.json())
        .use(cors());

    app.get('/health', (_req: Request, res: Response) => {
        res.json({ ok: true });
    });

    return app;
}