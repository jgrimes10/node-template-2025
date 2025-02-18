import express, { Request, Response } from 'express';

/** Health check router. */
const router = express.Router();

// Health check route.
router.get('/', (_req: Request, res: Response) => {
    res.send({ ok: true, time: new Date().toISOString() });
});

export { router as healthCheckRouter };
