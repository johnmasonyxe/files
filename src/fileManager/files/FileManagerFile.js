// @flow
import React from 'react';
import { Button } from 'antd';
import type { FileUpload } from '../data/types';
import { formatBytes } from '../data/utils';

const styles = {
    container: {
        background: 'white',
        border: '1px solid #e8e8e8',
        width: '300px',
        height: '150px',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
    },
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
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <img
                        style={styles.img}
                        src={file.url}
                        alt={file.name}
                    />
                </div>
                <div>
                    <div>{file.name}</div>
                    <div>{formatBytes(file.size)}</div>
                </div>
            </div>
            <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', height: '100%'}}>
                <Button onClick={() => removeFile(file)}>
                    Delete File
                </Button>
            </div>
        </div>
    );
};

export default FileManagerFile;
