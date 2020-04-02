// @flow
import React from 'react';
import { Button, Input } from 'antd';

const styles = {
    container: {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'},
    search: {maxWidth: '300px'}
};

type Props = {}
const FileManagerActionBar = (props: Props) => {

    return (
        <div style={styles.container}>
            <Input.Search
                placeholder="search documents"
                onSearch={value => console.log(value)}
                style={styles.search}
            />
            <Button>Upload</Button>
        </div>
    );
};

export default FileManagerActionBar;
