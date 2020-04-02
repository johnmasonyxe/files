// @flow
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Upload, Input, message, Button } from 'antd';

const styles = {
    container: {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'},
    search: {maxWidth: '300px'}
};

type Props = {
    uploadFile: any => void,
    searchText: string,
    setSearchText: string => void,
}
const FileManagerActionBar = (props: Props) => {
    const {
        uploadFile,
        searchText,
        setSearchText,
    } = props;
    const validateFile = (file: any) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 10;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };

    console.log({searchText});
    return (
        <div style={styles.container}>
            <Input.Search
                placeholder="search documents"
                onSearch={value => {
                    setSearchText(value);
                    console.log({value})
                }}
                style={styles.search}
            />
            <Upload
                name='file'
                action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                headers="authorization: 'authorization-text'"
                onChange={(info) => {
                    // const validFile = validateFile(info.file);
                    //
                    // if (!validFile) {
                    //     // todo: make this message better
                    //     message.error('please input a file of type x/y with size under z mb');
                    //     return;
                    // }
                    console.log({info});

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
                <Button>
                    <UploadOutlined/> Click to Upload
                </Button>
            </Upload>
        </div>
    );
};

export default FileManagerActionBar;
