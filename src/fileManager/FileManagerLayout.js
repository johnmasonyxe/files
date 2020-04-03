// @flow
import React  from 'react';
import FileManagerActionBarLayout from './actions/FileManagerActionBarLayout';
import type { FileUpload, FileUploads } from './data/types';
import FileManagerFileList from './files/FileManagerFileList';
import './fileManager.scss';

type Props = {
    files: FileUploads,
    uploadFile: any => void,
    removeFile: FileUpload => void,
    setSearchText: string => void,

}
const FileManagerLayout = (props: Props) => {
    const {
        uploadFile,
        files,
        removeFile,
        setSearchText,
    } = props;

    return (
        <div className='files-layout-container'>
            <FileManagerActionBarLayout
                setSearchText={setSearchText}
                uploadFile={uploadFile}
            />

            <FileManagerFileList
                files={files}
                removeFile={removeFile}
            />
        </div>
    );
};

export default FileManagerLayout;
