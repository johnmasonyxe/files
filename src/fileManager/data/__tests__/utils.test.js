import { getTotalSizeForFiles } from '../utils';

describe('getTotalSizeForFiles', () => {
    it('should get the total size', () => {
        const files = [{size: 10}, {size: 20}];
        const result = getTotalSizeForFiles(files);
        expect(result).toBe(30);
    });
});
