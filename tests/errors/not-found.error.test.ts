import { NotFoundError } from '../../src/errors/not-found.error';

describe('NotFoundError', () => {
    it('should create a NotFoundError instance', () => {
        const error = new NotFoundError();
        expect(error).toBeInstanceOf(NotFoundError);
        expect(error.message).toBe('Route not found');
    });

    it('should have a statusCode of 404', () => {
        const error = new NotFoundError();
        expect(error.statusCode).toBe(404);
    });

    it('should serialize errors correctly', () => {
        const error = new NotFoundError();
        const serializedErrors = error.serializeErrors();
        expect(serializedErrors).toEqual([{ message: 'Not Found' }]);
    });
});
