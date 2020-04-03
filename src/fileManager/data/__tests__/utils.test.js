import { formatBytes, getTotalSizeForFiles } from '../utils';

describe('getTotalSizeForFiles', () => {
    it('should get the total size', () => {
        const files = [{size: 10}, {size: 20}];
        const result = getTotalSizeForFiles(files);
        expect(result).toBe(30);
    });
});

describe('formatBytes', () => {
    it('should get the total size', () => {
        expect(formatBytes(1000)).toBe('1000 Bytes');
        expect(formatBytes(2000)).toBe('1.95 KB');
        expect(formatBytes(5000)).toBe('4.88 KB');
        expect(formatBytes(10000)).toBe('9.77 KB');
        expect(formatBytes(50000)).toBe('48.83 KB');
    });
});
