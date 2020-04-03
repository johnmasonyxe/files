// @flow
import React from 'react';
import FileManagerActionBarUpload from './FileManagerActionBarUpload';
import FileManagerActionBarSearch from './FileManagerActionBarSearch';

const styles = {
    container: {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'},
    search: {width: '500px'}
};

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
        <div className='flex-grid'>
            <FileManagerActionBarSearch setSearchText={setSearchText}/>
            <FileManagerActionBarUpload uploadFile={uploadFile}/>
        </div>
    );
};

export default FileManagerActionBarLayout;
