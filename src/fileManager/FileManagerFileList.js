// @flow
import React  from 'react';
import type { FileUploads } from './data/types';
import FileManagerFile from './FileManagerFile';
import './fileManagerStyles.scss';

const styles = {
    container: {paddingTop: '20px'},
};

type Props = {
    files: FileUploads,
}
const FileManagerFileList = (props: Props) => {
    const {files} = props;
    return (
        <div style={styles.container} className='flex-grid'>
            {files && files.map(file => {
                return (
                    <FileManagerFile key={file.uuid} file={file}/>
                );
            })}
        </div>
    );
};

export default FileManagerFileList;
