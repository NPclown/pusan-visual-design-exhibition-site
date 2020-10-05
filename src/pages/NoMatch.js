import React from 'react';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../assets/main.css'
import '../assets/font.css'


const NoMatch = () =>{
    return (
        <div className="App">
          <Header></Header>
          <div className="content">
              <div> 
                잘못된 접근입니다.
              </div>
          </div>
          <Footer></Footer>
      </div>
    );
}

export default NoMatch;

