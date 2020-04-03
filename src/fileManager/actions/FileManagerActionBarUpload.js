// @flow
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Upload, Input, message, Button, Spin } from 'antd';
import { validateFile } from '../data/validators';
import { colorPrimary } from '../../App.scss';

const styles = {
    container: {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'},
    search: {width: '500px'}
};

type Props = {
    uploadFile: any => void,
}
const FileManagerActionBarUpload = (props: Props) => {
    const [loadingFile, setLoadingFile] = useState(false);
    const {
        uploadFile,
    } = props;

    return (
        <Upload
            name='file'
            action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
            headers="authorization: 'authorization-text'"
            onChange={(info) => {
                if (info.file.status === 'uploading') {
                    setLoadingFile(true);
                }
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    uploadFile(info.file);
                    setLoadingFile(false);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            }}
            showUploadList={false}
            beforeUpload={validateFile}
        >
            <Button style={{width: '300px'}}>
                {loadingFile
                    ? <Spin style={{color: colorPrimary}}/>
                    : <div>
                        <UploadOutlined style={{color: colorPrimary}}/> Click to Upload
                    </div>
                }
            </Button>
        </Upload>
    );
};

export default FileManagerActionBarUpload;
