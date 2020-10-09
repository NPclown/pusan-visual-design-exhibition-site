import React from 'react';
import { Link } from 'react-router-dom';

function ArtPictureDetail (props) {
    return(
        <div className = "detail-right" >
            <Link to = {`/art/detail/${props.vd_id}/1`}>
                <img src={props.vd_img} alt="Avatar" className="detail-pic" />  
            </Link>
            <Link to = {`/art/detail/${props.acd_id}/1`}>
                <img src={props.acd_img} alt="Avatar" className="detail-pic" />  
            </Link>
            <Link to = {`/art/detail/${props.ds_id}/1`}>
                <img src={props.ds_img} alt="Avatar" className="detail-pic" />  
            </Link>
            <Link to = {`/art/detail/${props.dmd_id}/1`}>
                <img src={props.dmd_img} alt="Avatar" className="detail-pic" />  
            </Link>
        </div>
    )
}
export default ArtPictureDetail;

