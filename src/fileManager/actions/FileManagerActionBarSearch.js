// @flow
import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './actions.scss';

type Props = {
    setSearchText: string => void,
}
const FileManagerActionBarSearch = (props: Props) => {
    const {
        setSearchText,
    } = props;

    return (
        <Input.Search
            className='actions-search-width'
            placeholder="search documents"
            onChange={(evt) => setSearchText(evt.target.value)}
            enterButton={<SearchOutlined />}
        />
    );
};

export default FileManagerActionBarSearch;
