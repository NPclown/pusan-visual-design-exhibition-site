import React from 'react';
import { Link } from 'react-router-dom';
import {Image} from 'react-bootstrap';

const BackArrow = (props) =>{
    return (
        <div className="backarrow">
            <Image className="logo-img" src="/image/common/logo.png" alt="logo" fluid />
        </div>
    );
}

export default BackArrow;