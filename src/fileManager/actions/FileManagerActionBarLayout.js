// @flow
import React from 'react';
import FileManagerActionBarUpload from './FileManagerActionBarUpload';
import FileManagerActionBarSearch from './FileManagerActionBarSearch';
import './actions.scss';

type Props = {
    uploadFile: any => void,
    setSearchText: string => void,
}
const FileManagerActionBarLayout = (props: Props) => {
    const {
        uploadFile,
        setSearchText,
    } = props;

    return (
        <div className='actions-layout-container'>
            <FileManagerActionBarSearch setSearchText={setSearchText}/>
            <div className='actions-layout-upload-container'>
                <FileManagerActionBarUpload uploadFile={uploadFile}/>
            </div>
        </div>
    );
};

export default FileManagerActionBarLayout;
