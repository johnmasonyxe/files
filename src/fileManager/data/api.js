// @flow
import type { FileUpload } from './types';

export const uploadFileMock = (fileUpload: any): Promise<FileUpload> => {
    // todo: make fake data better
    return Promise.resolve({
        uid: (Math.random() * 1000).toString(),
        name: 'my upload name',
        status: 'success',
        url: 'https://www.tvovermind.com/wp-content/uploads/2017/06/Omaze.jpg',
    })
};

// could just pass back id of file removed or any sort of success message here
// could just pass file uid to server as well
export const removeFileMock = (fileUpload: any): Promise<FileUpload> => {
    return Promise.resolve(fileUpload)
};
