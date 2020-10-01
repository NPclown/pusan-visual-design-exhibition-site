import React from 'react';

function Picture ({name,image}) {
    return(
        <div className = "container1" >
            <img src={image} alt="Avatar" className="pic" />  
            <div className = "overlay">
                {name}
            </div>
        </div>
    )
}
export default Picture;

