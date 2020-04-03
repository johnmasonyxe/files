// @flow
import type { FileUpload, FileUploads } from './types';
import axios from 'axios';
import { message } from 'antd';
import { buildApiConfig, getCookie } from './utils';

export const uploadFileMock = (fileUpload: any): Promise<FileUpload> => {
    return Promise.resolve({
        uid: (Math.random() * 1000).toString(),
        name: fileUpload.name,
        status: 'success',
        url: 'https://www.tvovermind.com/wp-content/uploads/2017/06/Omaze.jpg',
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
            throw `error: ${error}`;
        });
};

export const searchFilesMock = (searchText: string): Promise<FileUploads> => {
    return Promise.resolve([{
        uid: (Math.random() * 1000).toString(),
        name: 'my upload name',
        status: 'success',
        url: 'https://www.tvovermind.com/wp-content/uploads/2017/06/Omaze.jpg',
        size: 1000,
    }])
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
            throw `error: ${error}`;
        });
};

// could just pass back id of file removed or any sort of success message here
// could just pass file uid to server as well
export const removeFileMock = (fileUpload: any): Promise<FileUpload> => {
    message.success(`file removed successfully`);
    return Promise.resolve(fileUpload)
};
export const removeFile = (fileUpload: any): Promise<FileUpload> => {
    axios.delete(`/api/v1/files/${fileUpload.uid}`, fileUpload, buildApiConfig())
        .then((response: { data: FileUpload }): FileUpload => {
            // the main reason i generally have apis pass back the object is to remove it from state
            // could easily just be done with an id
            return response.data;
        })
        .catch(error => {
            throw `error: ${error}`;
        });
};
