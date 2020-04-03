// @flow
import { message } from 'antd';

export const handleUploadChange = (
    uploadData: any,
    setLoadingFile: boolean => void,
    uploadFile: any => void,
): string => {
    console.log({uploadData});
    if (uploadData.file.status === 'uploading') {
        setLoadingFile(true);
        return 'uploading';
    }
    if (uploadData.file.status === 'done') {
        uploadFile(uploadData.file);
        setLoadingFile(false);
        return 'success'
    } else if (uploadData.file.status === 'error') {
        message.error(`${uploadData.file.name} file upload failed.`);
    }
    return 'error'
};
