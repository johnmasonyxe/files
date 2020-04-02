// @flow
import React  from 'react';
import FileManagerActionBar from './FileManagerActionBar';

const styles = {
    container: {margin: '20px auto', maxWidth: '960px'}
};

type Props = {}
const FileManagerLayout = (props: Props) => {

    return (
        <div style={styles.container}>
            <FileManagerActionBar />


        </div>
    );
};

export default FileManagerLayout;
