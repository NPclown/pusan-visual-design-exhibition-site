import React from 'react';

function Picture ({name,image,image_color}) {
    return(
        <div className = "container1" >
            <img src={image} alt="Avatar" className="pic" />
            <div className = "color-picture">
            <img src={image_color} alt="Avatar" className="pic" /> 
            <div className = "overlay">{name}</div>
            </div>
            
        </div>
    )
}
export default Picture;

