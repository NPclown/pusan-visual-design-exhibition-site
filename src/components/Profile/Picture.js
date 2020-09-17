import React from 'react';
import {Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

function Picture ({name,subject,image}) {

    return(
        <Col bsPrefix = "pic" >
        <Image src={image} fluid />
        <h4>{name}</h4>
        <h6>{subject}</h6>
        </Col>
    )
}
export default Picture;

