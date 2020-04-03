// @flow
import React from 'react';
import { Button } from 'antd';
import type { FileUpload } from '../data/types';
import { formatBytes } from '../data/utils';
import '../../base.scss';
import { colorPrimary } from '../../base.scss';

const styles = {
    container: {
        background: 'white',
        border: '1px solid #e8e8e8',
        width: '300px',
        height: '150px',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        padding: '5px',
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

        <div className='card fade' style={styles.container}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <img
                        style={styles.img}
                        src={file.url}
                        alt={file.name}
                    />
                </div>
                <div style={{textAlign: 'right'}}>
                    <div>
                        {file && file.name && file.name.length > 4 &&
                        <>
                            {file.name.slice(0, -4)}
                            <span style={{color: colorPrimary}}>{file.name.slice(-4)}</span>
                        </>
                        }
                    </div>
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
