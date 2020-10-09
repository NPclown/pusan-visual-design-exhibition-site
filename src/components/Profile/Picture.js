import React from 'react';

function Picture ({name,image,image_color}) {
    return(
        <div className = "profile" >
            <img src={image} alt="Avatar" className="profile-pic" />
            <div className = "profile-color-picture">
                <img src={image_color} alt="Avatar" className="profile-pic" /> 
                <div className = "profile-overlay font-s26-w7-w0">{name}</div>
            </div>
        </div>
    )
}
export default Picture;

