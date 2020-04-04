// @flow
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Upload, message, Button, Spin } from 'antd';
import { validateFile } from '../data/validators';
import { colorPrimary } from '../../base.scss';

type Props = {
    uploadFile: any => void,
}
const FileManagerActionBarUpload = (props: Props) => {
    const [loadingFile, setLoadingFile] = useState(false);
    const {
        uploadFile,
    } = props;

    const handleUploadChange = (uploadData: any) => {
        if (uploadData.file.status === 'uploading' && !loadingFile) {
            setLoadingFile(true);
        } else if (uploadData.file.status === 'done') {
            uploadFile(uploadData.file);
            setLoadingFile(false);
        } else if (uploadData.file.status === 'error') {
            message.error(`${uploadData.file.name} file upload failed.`);
        }
    };

    return (
        <Upload
            // get opinions on alternate implementation, too side effecty for me
            // onChange={uploadData => handleUploadChange(uploadData, setLoadingFile, uploadFile)}
            onChange={handleUploadChange}
            name='file'
            action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
            showUploadList={false}
            beforeUpload={validateFile}
        >
            <Button style={{width: '300px'}}>
                {loadingFile
                    ? <Spin style={{color: colorPrimary}}/>
                    : <div>
                        <UploadOutlined style={{color: colorPrimary}}/> Upload a PNG/JPG
                    </div>
                }
            </Button>
        </Upload>
    );
};

export default FileManagerActionBarUpload;
