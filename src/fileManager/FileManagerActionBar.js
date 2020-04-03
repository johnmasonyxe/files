// @flow
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Upload, Input, message, Button } from 'antd';
import { validateFile } from './data/validators';

const styles = {
    container: {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'},
    search: {width: '500px'}
};

type Props = {
    uploadFile: any => void,
    setSearchText: string => void,
}
const FileManagerActionBar = (props: Props) => {
    const {
        uploadFile,
        setSearchText,
    } = props;

    return (
        <div className='flex-grid'>
            <Input.Search
                placeholder="search documents"
                onSearch={value => setSearchText(value)}
                style={styles.search}
                className='mobile-container'
            />
            <Upload
                name='file'
                action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                headers="authorization: 'authorization-text'"
                onChange={(info) => {
                    if (info.file.status !== 'uploading') {
                        console.log(info.file, info.fileList);
                    }
                    if (info.file.status === 'done') {
                        uploadFile(info.file);
                        message.success(`${info.file.name} file uploaded successfully`);
                    } else if (info.file.status === 'error') {
                        message.error(`${info.file.name} file upload failed.`);
                    }
                }}
                showUploadList={false}
                beforeUpload={validateFile}
            >
                <Button style={{width: '300px'}}>
                    <UploadOutlined/> Click to Upload
                </Button>
            </Upload>
        </div>
    );
};

export default FileManagerActionBar;
