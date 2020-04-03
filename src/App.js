import React from 'react';
import FileManagerContainer from './fileManager/FileManagerContainer';
import { message } from 'antd';

function App () {
    message.config({
        duration: 1,
        maxCount: 2,
    });
    return (
        <FileManagerContainer/>
    );
}

export default App;
