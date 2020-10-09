import React from 'react';

function ArtPicture (props) {
    return(
        <div className = "art-container1" >
            <img src={props.image} alt="Avatar" className="art-pic" />  
            <div className = "art-overlay font-s26-w7-w0">
                {props.title}
            </div>
            <div className = "art-maker font-s18-w7-b9">
                {props.maker}
            </div>
        </div>
    )
}
export default ArtPicture;

