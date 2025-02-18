import { Request, Response, NextFunction } from 'express';
import { TestError } from './custom-error';
import { errorHandler } from '../../src/middleware/error-handler';

describe('errorHandler', () => {
    let mockRequest: Request;
    let mockResponse: Response;
    let mockNext: NextFunction;
    let send: jest.Mock;
    let status: jest.Mock;

    beforeEach(() => {
        send = jest.fn();
        status = jest.fn(() => ({ send }));
        mockRequest = {} as Request;
        mockResponse = {
            status,
        } as unknown as Response;
        mockNext = jest.fn() as NextFunction;
    });

    it('should handle CustomError', () => {
        const error = new TestError('Test error');
        errorHandler(error, mockRequest, mockResponse, mockNext);

        expect(status).toHaveBeenCalledWith(400);
        expect(send).toHaveBeenCalledWith({
            errors: [{ message: 'Test error' }],
        });
    });

    it('should handle generic Error', () => {
        const error = new Error('Generic error');
        errorHandler(error, mockRequest, mockResponse, mockNext);

        expect(status).toHaveBeenCalledWith(500);
        expect(send).toHaveBeenCalledWith({
            errors: [{ message: 'Something went wrong' }],
        });
    });
});
