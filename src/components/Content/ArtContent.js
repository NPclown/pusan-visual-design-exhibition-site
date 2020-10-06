import React from 'react';

import {Image} from 'react-bootstrap'
import {Player} from 'video-react';

import 'video-react/dist/video-react.css';

const ArtContent = (props) =>{
    console.log(props)
    return (
        <div>
            {props.image === "" ? ("") : (<Image src={props.image} alt="logo" fluid />)}
            {props.video === "" ? ("") : (<Player src={props.video} />)}
        </div>
    );
}

export default ArtContent;