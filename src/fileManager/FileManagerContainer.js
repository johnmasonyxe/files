// @flow
import React, { useState } from 'react';
import FileManagerLayout from './FileManagerLayout';
import { uploadFileMock as uploadFile } from './data/api';
import { MOCK_FILES } from './data/mocks';

type Props = {}

const FileManagerContainer = (props: Props) => {

    const [files, setFiles] = useState(MOCK_FILES);

    const handleUploadFile = (fileUpload: any) => {
        uploadFile(fileUpload).then((file) => {
            setFiles([...files, file]);
        })
    };

    return (
        <>
            <FileManagerLayout
                files={files}
                uploadFile={handleUploadFile}
            />
        </>
    );
};

export default FileManagerContainer;
