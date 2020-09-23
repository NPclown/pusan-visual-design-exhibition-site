import React from 'react';

function Picture ({props,name,subject,image,idx}) {
    return(
        <div className = "container1" >
            <img src={image} alt="Avatar" class="pic" />  
            <div className = "overlay">
                {name}
            </div>
        </div>
    )
}
export default Picture;

