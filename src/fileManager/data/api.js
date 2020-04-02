// @flow
import type { FileUpload } from './types';

export const uploadFileMock = (fileUpload: any): Promise<FileUpload> => {
    console.log({fileUpload});
    return Promise.resolve({
        uid: 'der',
        name: 'my upload name',
        status: 'success',
        url: 'https://www.tvovermind.com/wp-content/uploads/2017/06/Omaze.jpg',
    })
};
