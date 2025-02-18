import request from 'supertest';
import { createServer } from '../src/server';

const app = createServer();

describe('Health check route', () => {
    it('should return 200 OK with a valid response', async () => {
        const response = await request(app).get('/api/health');
        expect(response.status).toBe(200);
        expect(response.body.ok).toBe(true);
        expect(Date.parse(response.body.time)).toBeGreaterThan(0); // Check if 'time' is a valid date.
    });
});
