import React from 'react';

import {Image} from 'react-bootstrap'
import {Player} from 'video-react';

import 'video-react/dist/video-react.css';

const ArtContent = (props) =>{
    return (
        <div>
            <Image src="/image/main/main.jpg" className="Main-logo" alt="logo" fluid />
            <Player src="/test_1200px.mp4" />
        </div>
    );
}

export default ArtContent;