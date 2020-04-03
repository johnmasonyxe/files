// @flow
import React from 'react';
import FileManagerFile from './FileManagerFile';
import type { FileUpload, FileUploads } from '../data/types';
import { getTotalSizeForFiles } from '../data/utils';
import '../../base.scss';
import './files.scss';

type Props = {
    files: FileUploads,
    removeFile: FileUpload => void,
}
const FileManagerFileList = (props: Props) => {
    const {files, removeFile} = props;
    return (
        <div className='files-container'>
            <div className='mobile-container files-info-container'>
                <div>{files.length} files</div>
                <div>total size: {getTotalSizeForFiles(files)}</div>
            </div>
            <div className='files-list-container'>
                {files && files.map(file => {
                    return (
                        <div key={file.id}>
                            <FileManagerFile
                                file={file}
                                removeFile={removeFile}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FileManagerFileList;
