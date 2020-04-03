// @flow
import React, { useState } from 'react';
import FileManagerLayout from './FileManagerLayout';
import { uploadFileMock as uploadFile, removeFileMock as removeFile } from './data/api';
import { MOCK_FILES } from './data/mocks';
import type { FileUpload } from './data/types';
import { reject, filter } from 'lodash';
import { message } from 'antd';
import '../App.scss';
type Props = {}

const FileManagerContainer = (props: Props) => {

    const [files, setFiles] = useState(MOCK_FILES);
    const [searchText, setSearchText] = useState('');

    const handleUploadFile = (fileUpload: any) => {
        uploadFile(fileUpload)
            .then((file) => {
                message.success(`file uploaded successfully`);
                setFiles([file, ...files]);
            })
            .catch(err => message.error(`file upload failed`));
    };

    const handleRemoveFile = (file: FileUpload) => {
        removeFile(file)
            .then((file) => {
                const updatedFiles = reject(files, f => f.uid === file.uid);
                setFiles(updatedFiles);
            })
            .catch(err => message.error(`file upload failed`));

    };

    const filteredFiles = filter(files, f => f.name.includes(searchText));

    return (
        <div className='mobile-layout'>
            <FileManagerLayout
                setSearchText={setSearchText}
                files={filteredFiles}
                uploadFile={handleUploadFile}
                removeFile={handleRemoveFile}
            />
        </div>
    );
};

export default FileManagerContainer;
