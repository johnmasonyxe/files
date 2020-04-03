// @flow

export type FileUpload = {
    uid: string,
    name: string,
    status: string,
    url: string,
    size: number,
}

export type FileUploads = Array<FileUpload>;
