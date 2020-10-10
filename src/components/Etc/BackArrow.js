import React from 'react';
import {Image} from 'react-bootstrap';

const BackArrow = (props) =>{
    return (
        <div className="backarrow">
            <Image className="backarrow-logo" src="/image/common/backArrows.png" onClick={() => props.history.goBack()} alt="logo" height="70px" fluid />
        </div>
    );
}

export default BackArrow;