// @flow

export type FileUpload = {
    uid: string,
    name: string,
    status: string,
    url?: string,
}

export type FileUploads = Array<FileUpload>;
