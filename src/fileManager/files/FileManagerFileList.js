// @flow
import React from 'react';
import FileManagerFile from './FileManagerFile';
import type { FileUpload, FileUploads } from '../data/types';
import './files.scss';
import FileManagerFileListHeader from './FileManagerFileListHeader';

type Props = {
    files: FileUploads,
    removeFile: FileUpload => void,
}
const FileManagerFileList = (props: Props) => {
    const {files, removeFile} = props;
    return (
        <div className='files-container'>
            <FileManagerFileListHeader files={files}/>
            <div className='files-list-container'>
                {files && files.map(file => (
                    <div key={file.id}>
                        <FileManagerFile
                            file={file}
                            removeFile={removeFile}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileManagerFileList;
