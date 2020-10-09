import React from 'react';

function Picture ({name,image,image_color}) {
    return(
        <div className = "container1" >
            <img src={image} alt="Avatar" className="pic" />
            <div className = "color-picture">
                <img src={image_color} alt="Avatar" className="pic" /> 
                <div className = "overlay font-s26-w7-w0">{name}</div>
            </div>
        </div>
    )
}
export default Picture;

