// @flow
import type { FileUploads } from './types';
import { reduce } from 'lodash';

export const getTotalSizeForFiles = (files: FileUploads): number => {
    const totalBytes = reduce(files, (acc, file) => {return acc + file.size}, 0);
    return formatBytes(totalBytes);
};

// ref - https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
export const formatBytes = (bytes, decimals = 2): string => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

// ref - https://stackoverflow.com/questions/10730362/get-cookie-by-name
export const getCookie = (name: string): string => {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) {
      return parts.pop().split(";").shift();
  }
};

export const buildApiConfig = () => {
    return {
        xsrfCookieName: 'XSRF-TOKEN', // help prevent cross-site request forgeries
        xsrfHeaderName: 'X-XSRF-TOKEN', // help prevent cross-site request forgeries
        capchaToken: getCookie('recaptcha-v3-site-key'),
    };
};
