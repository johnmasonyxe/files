// @flow
import type { FileUpload, FileUploads } from './types';
import axios from 'axios';
import { message } from 'antd';
import { getCookie } from './utils';
import { filter } from 'lodash';
import { filterFile } from './validators';
import { MOCK_UPLOADED_FILE_URLS } from './mocks';

const buildApiConfig = () => {
    return {
        capchaToken: getCookie('recaptcha-v3-site-key'),
    };
};

// ac specifies 'store a file'
// decide if this is adequate, i'm mocking 'storing' a file on the back end and passing the relevant data needed to display it
export const uploadFileMock = (fileUpload: any): Promise<FileUpload> => {
    const mockUrl = MOCK_UPLOADED_FILE_URLS[Math.round(Math.random() * 9)];
    return Promise.resolve({
        id: (Math.random() * 1000).toString(),
        name: fileUpload.name,
        status: 'success',
        url: mockUrl,
        size: fileUpload.size,
    })
};
export const uploadFile = (fileUpload: any): Promise<FileUpload> => {
    // normally i'd have mapper functions that transform the fileUpload to/from the api interface
    axios.post(`/api/v1/files/`, fileUpload, buildApiConfig())
        .then((response: { data: FileUpload }): FileUpload => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
};

export const searchFilesMock = (searchText: string, allFiles: FileUploads): Promise<FileUploads> => {
    const filteredFiles = filter(allFiles, f => filterFile(f, searchText));
    return Promise.resolve(filteredFiles);
};
export const searchFiles = (searchText: any): Promise<FileUploads> => {
    const data = {
        searchText: searchText,
    };
    // normally i'd have mapper functions that transform the fileUpload to/from the api interface
    axios.post(`/api/v1/files/search`, data, buildApiConfig())
        .then((response: { data: FileUploads }): FileUploads => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
};

// could just pass back id of file removed or any sort of success message here
// could just pass file uid to server as well
export const removeFileMock = (fileUpload: any): Promise<FileUpload> => {
    message.success(`file removed successfully`);
    return Promise.resolve(fileUpload)
};
export const removeFile = (fileUpload: any): Promise<FileUpload> => {
    axios.delete(`/api/v1/files/${fileUpload.id}`, fileUpload, buildApiConfig())
        .then((response: { data: FileUpload }): FileUpload => {
            // the main reason i generally have apis pass back the object is to remove it from state
            // could easily just be done with an id
            return response.data;
        })
        .catch(error => {
            return error;
        });
};
