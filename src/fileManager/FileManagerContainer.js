// @flow
import React, { useState } from 'react';
import FileManagerLayout from './FileManagerLayout';

type Props = {}
const FileManagerContainer = (props: Props) => {

    const [files, setFiles] = useState([]);

    return (
        <>
            <FileManagerLayout />
        </>
    );
};

export default FileManagerContainer;
