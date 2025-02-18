import { CustomError } from '../../src/errors/custom.error';
import { TestError } from './custom-error';

describe('CustomError', () => {
    it('should construct a CustomError instance', () => {
        const error = new TestError('Test error message');
        expect(error).toBeInstanceOf(CustomError);
        expect(error.message).toBe('Test error message');
    });

    it('should have a statusCode property', () => {
        const error = new TestError('Test error message');
        expect(error.statusCode).toBe(400);
    });

    it('should serialize errors', () => {
        const error = new TestError('Test error message');
        const serializedErrors = error.serializeErrors();
        expect(serializedErrors).toEqual([{ message: 'Test error message' }]);
    });
});
