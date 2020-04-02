// @flow
import React  from 'react';
import FileManagerActionBar from './FileManagerActionBar';
import FileManagerFileList from './FileManagerFileList';
import type { FileUploads } from './data/types';

const styles = {
    container: {margin: '20px auto', maxWidth: '960px'}
};

type Props = {
    files: FileUploads,
    uploadFile: any => void,
}
const FileManagerLayout = (props: Props) => {
    const {uploadFile, files} = props;
    return (
        <div style={styles.container}>
            <FileManagerActionBar uploadFile={uploadFile}/>

            <FileManagerFileList files={files} />
        </div>
    );
};

export default FileManagerLayout;
