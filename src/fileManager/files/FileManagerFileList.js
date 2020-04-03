// @flow
import React from 'react';
import FileManagerFile from './FileManagerFile';
import type { FileUpload, FileUploads } from '../data/types';
import { getTotalSizeForFiles } from '../data/utils';
import '../../App.scss';
import { colorPrimary } from '../../App.scss';

const styles = {
    container: {},
    info: {
        padding: '10px',
        margin: '30px auto 10px',
        display: 'flex',
        justifyContent: 'space-between',
        background: colorPrimary,
        color: 'white',
    },
    center: {display: 'flex', alignItems: 'center'}
};

type Props = {
    files: FileUploads,
    removeFile: FileUpload => void,
}
const FileManagerFileList = (props: Props) => {
    const {files, removeFile} = props;
    return (
        <div>
            <div className='mobile-container' style={styles.info}>
                <div style={styles.center}>{files.length} files</div>
                <div>total size: {getTotalSizeForFiles(files)}</div>
            </div>
            <div style={styles.container} className='flex-grid'>
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
