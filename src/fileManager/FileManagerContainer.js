// @flow
import React, { useState } from 'react';
import { reject} from 'lodash';
import { message } from 'antd';
import {
    uploadFileMock as uploadFile,
    removeFileMock as removeFile,
    searchFilesMock as searchFiles
} from './data/api';
import { MOCK_FILES } from './data/mocks';
import FileManagerLayout from './FileManagerLayout';
import type { FileUpload } from './data/types';
import { filterFile } from './data/validators';

type Props = {}

const FileManagerContainer = (props: Props) => {

    const [files, setFiles] = useState(MOCK_FILES);
    const [filteredFiles, setFilteredFiles] = useState(MOCK_FILES);
    const [searchText, setSearchText] = useState('');

    const handleUploadFile = (fileUpload: any) => {
        uploadFile(fileUpload)
            .then((file) => {
                message.success(`file uploaded successfully`);
                const updatedFiles = [file, ...files];
                setFiles(updatedFiles);
                if (filterFile(file, searchText)) {
                    const updatedFilteredFiles = [file, ...filteredFiles];
                    setFilteredFiles(updatedFilteredFiles)
                }
            })
            .catch(err => message.error(`file upload failed`));
    };

    const handleRemoveFile = (file: FileUpload) => {
        removeFile(file)
            .then((file) => {
                const updatedFiles = reject(files, f => f.id === file.id);
                setFiles(updatedFiles);
                const updatedFilteredFiles = reject(filteredFiles, f => f.id === file.id);
                setFilteredFiles(updatedFilteredFiles);
            })
            .catch(err => message.error(`file upload failed`));

    };

    const handleSearchFiles = (searchText: string) => {
        setSearchText(searchText);
        // note: the mock takes all files in as an arg but the actual api implementation would not
        searchFiles(searchText, files)
            .then((files) => {
                setFilteredFiles(files)
            })
            .catch(err => message.error(`file search failed`));
    };

    return (
        <div>
            <FileManagerLayout
                files={filteredFiles}
                setSearchText={handleSearchFiles}
                uploadFile={handleUploadFile}
                removeFile={handleRemoveFile}
            />
        </div>
    );
};

export default FileManagerContainer;
