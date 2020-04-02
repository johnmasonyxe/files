// @flow
import React from 'react';
import FileManagerActionBar from './FileManagerActionBar';
import type { FileUpload, FileUploads } from './data/types';
import { Button } from 'antd';

const styles = {
    container: {border: '1px solid black', width: '300px', height: '200px', marginBottom: '20px'},
    img: {width: '100px', height: '100px'}
};

type Props = {
    file: FileUpload,
    removeFile: FileUpload => void,
}
const FileManagerFile = (props: Props) => {
    const {file, removeFile} = props;
    return (

        <div style={styles.container}>
            <img
                style={styles.img}
                src={file.url}
                alt={file.name}
            />
            {file.name}
            <Button onClick={() => removeFile(file)}>
                Delete File
            </Button>
        </div>
    );
};

export default FileManagerFile;
