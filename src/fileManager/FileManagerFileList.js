// @flow
import React  from 'react';
import type { FileUpload, FileUploads } from './data/types';
import FileManagerFile from './FileManagerFile';
import './fileManagerStyles.scss';

const styles = {
    container: {paddingTop: '20px'},
};

type Props = {
    files: FileUploads,
    removeFile: FileUpload => void,
}
const FileManagerFileList = (props: Props) => {
    const {files, removeFile} = props;
    return (
        <div style={styles.container} className='flex-grid'>
            {files && files.map(file => {
                return (
                    <FileManagerFile
                        key={file.uuid}
                        file={file}
                        removeFile={removeFile}
                    />
                );
            })}
        </div>
    );
};

export default FileManagerFileList;
