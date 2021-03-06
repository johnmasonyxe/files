import { message } from 'antd';
import type { FileUpload } from './types';

export const validateFile = (file: any): boolean => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const fileSizeOk = file.size / 1024 / 1024 < 10;
    if (!fileSizeOk) {
        message.error('Image must smaller than 10MB!');
    }
    return isJpgOrPng && fileSizeOk;
};

export const filterFile = (f: FileUpload, searchText: string): boolean => {
    return f.name.toLowerCase().includes(searchText.toLowerCase());
};
