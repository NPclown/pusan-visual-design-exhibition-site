import React from 'react';
import Image from 'react-bootstrap/Image';

function Picture ({name,subject,image}) {
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



// <div class="container">
 // <img src="img_avatar.png" >
//  <div class="overlay">My Name is John</div>
//</div> 