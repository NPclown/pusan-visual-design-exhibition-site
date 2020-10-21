import React from 'react';

function Picture (props) {
    return(
        <div className = "profile" >
            <img src={props.image} alt="Avatar" className="profile-pic background" />
            <div className = "profile-color-picture">
                <img src={props.image_color} alt="Avatar" className="profile-pic " /> 
                <div className = "profile-overlay font-s26-w7-w0">{props.name}</div>
            </div>
        </div>
    )
}
export default Picture;

