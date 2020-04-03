import { handleUploadChange } from '../utils';

describe('handleUploadChange', () => {
    it('should return loading status if loading', () => {
        const result = handleUploadChange(
            {file: {status: 'uploading'}},
            jest.fn(),
            jest.fn()
        );
        expect(result).toBe('uploading');
    });
    it('should return success status if loading', () => {
        const result = handleUploadChange(
            {file: {status: 'done'}},
            jest.fn(),
            jest.fn()
        );
        expect(result).toBe('success');
    });
    it('should return error status if not loading or done', () => {
        const result = handleUploadChange(
            {file: {status: 'anything else'}},
            jest.fn(),
            jest.fn()
        );
        expect(result).toBe('error');
    });
});
