import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/artpage.css'

function ArtPictureDetail (props) {
    return(
        <div className = "detail-right" >
            <Link to = {`/art/detail/${props.vd_id}`}>
                <div className = "detail-art-container " >
                    <img src={props.vd_img} alt="Avatar" className="detail-pic" />  
                    <div className = "detail-art-overlay font-s26-w7-w0">
                        {props.vd_name}
                    </div>
                </div>
            </Link>
            <Link to = {`/art/detail/${props.acd_id}`}>
                <div className = "detail-art-container" >
                    <img src={props.acd_img} alt="Avatar" className="detail-pic" />
                    <div className = "detail-art-overlay font-s26-w7-w0">
                        {props.acd_name}
                    </div>
                </div>
            </Link>
            {
                props.ds_id === "null" ? ("") : (
                    <Link to = {`/art/detail/${props.ds_id}`}>
                        <div className = "detail-art-container" >
                            <img src={props.ds_img} alt="Avatar" className="detail-pic" />
                            <div className = "detail-art-overlay font-s26-w7-w0">
                                {props.ds_name}
                            </div>
                        </div>
                    </Link>
                    )
            }
            <Link to = {`/art/detail/${props.dmd_id}`}>
                <div className = "detail-art-container" >
                    <img src={props.dmd_img} alt="Avatar" className="detail-pic" />
                    <div className = "detail-art-overlay font-s26-w7-w0">
                        {props.dmd_name}
                    </div> 
                </div>
            </Link>
        </div>
    )
}
export default ArtPictureDetail;

