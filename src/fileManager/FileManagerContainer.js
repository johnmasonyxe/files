// @flow
import React, { useState } from 'react';
import FileManagerLayout from './FileManagerLayout';
import { uploadFileMock as uploadFile, removeFileMock as removeFile } from './data/api';
import { MOCK_FILES } from './data/mocks';
import type { FileUpload, FileUploads } from './data/types';
import { reject, filter } from 'lodash';

type Props = {}

const FileManagerContainer = (props: Props) => {

    const [files, setFiles] = useState(MOCK_FILES);
    const [searchText, setSearchText] = useState('');

    const handleUploadFile = (fileUpload: any) => {
        uploadFile(fileUpload).then((file) => {
            setFiles([...files, file]);
        })
        // todo: handle api failure
    };

    const handleRemoveFile = (file: FileUpload) => {
        removeFile(file).then((file) => {
            const updatedFiles = reject(files, f => {
                console.log({f, file, shouldReject: f.uid === file.uid});
                return f.uid === file.uid;
            });
            console.log({updatedFiles, files, file});
            setFiles(updatedFiles);
        })
        // todo: handle api failure
    };

    const filteredFiles = filter(files, f => f.name.includes(searchText));

    return (
        <>
            <FileManagerLayout
                searchText={searchText}
                setSearchText={setSearchText}
                files={filteredFiles}
                uploadFile={handleUploadFile}
                removeFile={handleRemoveFile}
            />
        </>
    );
};

export default FileManagerContainer;
