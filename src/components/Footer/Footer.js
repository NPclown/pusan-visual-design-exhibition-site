import React from 'react';
import {Image} from 'react-bootstrap';
import BackArrow from '../Etc/BackArrow';

const Footer = (props) =>{
    return (
        <div className="footer">
            <div className="footer-item-mobile">
                {
                    props.type ? (
                        <div className="footer-copyright font-s9-w5-b9">
                            copyright <span className="footer-times">©</span> PNU Visual Design Graduation Exhibition All rights reserved.
                        </div>
                    ) : (
                        <BackArrow {...props}></BackArrow>
                    )
                }
            </div>
            <div className="footer-item">
                <div className="footer-copyright font-s13-w5-b9">
                    copyright <span className="footer-times">©</span> PNU Visual Design Graduation Exhibition All rights reserved.
                </div>
                <div className="footer-logo">  
                    <Image className="footer-logo-img" src="/image/common/logo.png" alt="logo" fluid />
                </div>
            </div>
        </div>
    );
}

export default Footer;