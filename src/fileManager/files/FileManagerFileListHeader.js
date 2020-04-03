// @flow
import React from 'react';
import type { FileUploads } from '../data/types';
import { getTotalSizeForFiles } from '../data/utils';
import './files.scss';

type Props = {
    files: FileUploads,
}
const FileManagerFileListHeader = (props: Props) => {
    const {files} = props;
    return (
        <div className='files-info-container'>
            <div>{files.length} files</div>
            <div>total size: {getTotalSizeForFiles(files)}</div>
        </div>
    );
};

export default FileManagerFileListHeader;
