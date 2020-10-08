import React from 'react';

function ArtPicture ({title,maker,image}) {
    return(
        <div className = "art-container1" >
            <img src={image} alt="Avatar" className="art-pic" />  
            <div className = "art-overlay font-s26-w7-w0">
                {title}
            </div>
            <div className = "art-maker font-s18-w7-b9">
                {maker}
            </div>
        </div>
    )
}
export default ArtPicture;

