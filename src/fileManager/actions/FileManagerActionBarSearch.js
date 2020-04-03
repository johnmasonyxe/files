// @flow
import React from 'react';
import { Input } from 'antd';
import '../../App.scss';

const styles = {
    container: {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'},
    search: {width: '500px'}
};

type Props = {
    setSearchText: string => void,
}
const FileManagerActionBarSearch = (props: Props) => {
    const {
        setSearchText,
    } = props;

    return (
        <Input.Search
            placeholder="search documents"
            onSearch={value => setSearchText(value)}
            style={styles.search}
            className='mobile-container'
        />
    );
};

export default FileManagerActionBarSearch;
