import React from 'react';
import {Spinner} from 'react-bootstrap';

const Loading = (props) =>{
    return (  
        <div className="content">
            <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Loading;