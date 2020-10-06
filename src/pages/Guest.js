import React from 'react';
import {Image} from 'react-bootstrap';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import GuestRegister from '../components/Guest/GuestRegister'
import '../assets/main.css'
import '../assets/font.css'
import '../components/Guest/Guest.css'

const Guest = () =>{
    return (
        <div className="App">
          <Header state="방명록"></Header>
          <div className="content">
            <div className="guest-logo">  
                <Image src="/image/common/logo.png" alt="logo" fluid />
            </div>
            <div className="font-s26-w7-g9">
                2020 부산대학교 디자인학과 시각디자인전공 졸업전시<br/>
                열여덟 개의 지향점을 응원하며
            </div>
            <GuestRegister></GuestRegister>
          </div>
          <Footer></Footer>
      </div>
    );
}

export default Guest;

