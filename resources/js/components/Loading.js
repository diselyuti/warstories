import React from 'react';

const Loading = ({text}) => {
    return (
        <div className='loading d-flex justify-content-center align-items-center'>
            <h1>{text}</h1>
        </div>
    );
};

export default Loading;
