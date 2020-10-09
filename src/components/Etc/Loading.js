import React from 'react';
import {Spinner} from 'react-bootstrap';

const Loading = (props) =>{
    return (  
        <div className="content">
            <div className="loading">
                <Spinner animation="border" role="status"></Spinner>
            </div>
        </div>
    );
}

export default Loading;