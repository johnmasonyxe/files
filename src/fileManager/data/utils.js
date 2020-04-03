// @flow
import type { FileUploads } from './types';
import { reduce } from 'lodash';

export const getTotalSizeForFiles = (files: FileUploads): number => {
    return reduce(files, (acc, file) => {return acc + file.size}, 0);
};
