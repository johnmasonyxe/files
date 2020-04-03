// @flow
import React from 'react';
import FileManagerFile from './FileManagerFile';
import type { FileUpload, FileUploads } from '../data/types';
import { getTotalSizeForFiles } from '../data/utils';
import '../fileManagerStyles.scss';

const styles = {
    container: {},
};

type Props = {
    files: FileUploads,
    removeFile: FileUpload => void,
}
const FileManagerFileList = (props: Props) => {
    const {files, removeFile} = props;
    return (
        <div>
            <div className='mobile-container' style={{paddingTop: '20px', margin: 'auto', display: 'flex', justifyContent: 'space-between'}}>
                <div>{files.length} files</div>
                <div>total size: {getTotalSizeForFiles(files)}</div>
            </div>
            <div style={styles.container} className='flex-grid'>
                {files && files.map(file => {
                    return (
                        <div key={file.uid}>
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
