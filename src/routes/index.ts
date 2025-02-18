import express from 'express';
import { healthCheckRouter } from './health-check.route';

/** Main router. */
const router = express.Router();

// Health check route.
router.use('/health', healthCheckRouter);

export { router };
