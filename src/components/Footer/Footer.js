import React from 'react';
import {Image} from 'react-bootstrap';
import './footer.css';

const Footer = () =>{
    return (
        <div className="footer">
            <div className="copyright">copyright <span className="copyright times">@</span> PNU Visual Design Graduation Exhibition All rights reserved.</div>
            <div className="logo">  
                <Image src="/image/main/logo.png" alt="logo" fluid />
            </div>
        </div>
    );
}

export default Footer;