import React from 'react';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {Link} from 'react-router-dom'
import '../assets/main.css'
import '../assets/font.css'


const NoMatch = () =>{
    return (
        <div className="App">
          <Header></Header>
          <div className="content">
              <div className="font-s26-w7-b9 error"> 
                찾을수 없는 페이지 입니다.<br/>
                요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요 : )
              </div>
              <div className="error-button">
                <Link to="/" className="font-s18-w7-b9">홈으로 이동</Link>
              </div>
          </div>
          <Footer></Footer>
      </div>
    );
}

export default NoMatch;

