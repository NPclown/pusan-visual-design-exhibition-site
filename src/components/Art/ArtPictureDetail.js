import React from 'react';
import { Link } from 'react-router-dom';

function ArtPictureDetail ({ vd_img , acd_img, ds_img, dmd_img, vd_id,acd_id,ds_id,dmd_id}) {
    return(
        <div className = "profileViewArt" >
            <div className ="profileViewRow">
            <Link to = {`/art/detail/${vd_id}/1`}>
            <img src={vd_img} alt="Avatar" className="profileViewPic" />  
            </Link>
            <Link to = {`/art/detail/${acd_id}/1`}>
            <img src={acd_img} alt="Avatar" className="profileViewPic" />  
            </Link>
            <Link to = {`/art/detail/${ds_id}/1`}>
            <img src={ds_img} alt="Avatar" className="profileViewPic" />  
            </Link>
            <Link to = {`/art/detail/${dmd_id}/1`}>
            <img src={dmd_img} alt="Avatar" className="profileViewPic" />  
            </Link>
            </div>
        </div>
    )
}
export default ArtPictureDetail;
