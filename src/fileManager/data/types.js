// @flow

export type FileUpload = {
    id: string,
    name: string,
    status: string,
    url: string,
    size: number,
}

export type FileUploads = Array<FileUpload>;
