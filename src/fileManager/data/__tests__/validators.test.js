import { validateFile, filterFile } from '../validators';

describe('validateFile', () => {
    it('should return false for files that are too big', () => {
        const file = {size: 100000000, type: 'image/jpeg'};
        const result = validateFile(file);
        expect(result).toBe(false);
    });
    it('should return true for files that are under 10Mb', () => {
        const file = {size: 10000, type: 'image/jpeg'};
        const result = validateFile(file);
        expect(result).toBe(true);
    });
    it('should return true for files that are jpeg or png', () => {
        const file = {size: 10000, type: 'image/jpeg'};
        const result = validateFile(file);
        expect(result).toBe(true);

        const file2 = {size: 10000, type: 'image/png'};
        const result2 = validateFile(file2);
        expect(result2).toBe(true);
    });
    it('should return false for files that are not jpeg or png', () => {
        const file = {size: 10000, type: 'image/gif'};
        const result = validateFile(file);
        expect(result).toBe(false);

        const file2 = {size: 10000, type: 'image/pdf'};
        const result2 = validateFile(file2);
        expect(result2).toBe(false);

        const file3 = {size: 10000, type: 'image/txt'};
        const result3 = validateFile(file3);
        expect(result3).toBe(false);
    });
});

describe('filterFile', () => {
    it('should return true if file name contains search text', () => {
        expect(filterFile({name: 'filename'}, 'f')).toBe(true);
        expect(filterFile({name: 'filename'}, 'le')).toBe(true);
        expect(filterFile({name: 'filename'}, 'FILENAME')).toBe(true);
        expect(filterFile({name: 'FILENAME'}, 'filename')).toBe(true);
    });

    it('should return false if file name does not contain search text', () => {
        expect(filterFile({name: 'filename'}, 'nope')).toBe(false);
        expect(filterFile({name: 'filename'}, 'iles')).toBe(false);
    });
});
