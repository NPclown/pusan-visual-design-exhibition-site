import React from 'react';

import {Image} from 'react-bootstrap'
import {Player} from 'video-react';

import 'video-react/dist/video-react.css';

const ArtContent = (props) =>{
    return (
        <div>
            {props.image === "" ? ("") : (<Image src={props.image} alt="logo" fluid onClick={() => window.open(props.image, '_blank')}/>)}
            {props.video === "null" ? ("") : (<Player src={props.video} />)}
        </div>
    );
}

export default ArtContent;