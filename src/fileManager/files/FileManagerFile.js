// @flow
import React from 'react';
import { Button } from 'antd';
import type { FileUpload } from '../data/types';
import { formatBytes } from '../data/utils';
import { colorPrimary } from '../../base.scss';
import './files.scss';


type Props = {
    file: FileUpload,
    removeFile: FileUpload => void,
}
const FileManagerFile = (props: Props) => {
    const {file, removeFile} = props;
    return (
        <div className='card fade files-file-container'>
            <div className='files-file-card-container'>
                <div>
                    <img
                        className='files-file-img'
                        src={file.url}
                        alt={file.name}
                    />
                </div>
                <div className='files-file-card-text'>
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
            <div className='files-file-card-actions'>
                <Button onClick={() => removeFile(file)}>
                    Delete File
                </Button>
            </div>
        </div>
    );
};

export default FileManagerFile;
