import React from 'react';

function ArtPicture ({title,maker,image}) {
    return(
        <div className = "art-container1" >
            <img src={image} alt="Avatar" class="art-pic" />  
            <div className = "art-overlay">
                {title}
            </div>
            <div className = "art-maker">
                {maker}
            </div>
        </div>
    )
}
export default ArtPicture;

