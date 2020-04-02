// @flow
import React  from 'react';
import FileManagerActionBar from './FileManagerActionBar';
import FileManagerFileList from './FileManagerFileList';
import type { FileUpload, FileUploads } from './data/types';

const styles = {
    container: {margin: '20px auto', maxWidth: '960px'}
};

type Props = {
    files: FileUploads,
    uploadFile: any => void,
    removeFile: FileUpload => void,
    searchText: string,
    setSearchText: string => void,

}
const FileManagerLayout = (props: Props) => {
    const {
        uploadFile,
        files,
        removeFile,
        searchText,
        setSearchText,
    } = props;

    return (
        <div style={styles.container}>
            <FileManagerActionBar
                searchText={searchText}
                setSearchText={setSearchText}
                uploadFile={uploadFile}
            />

            <FileManagerFileList
                files={files}
                removeFile={removeFile}
            />
        </div>
    );
};

export default FileManagerLayout;
