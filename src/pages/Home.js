import React from 'react';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Home = () =>{
    return (
        <div className="App">
          <Header state="홈"></Header>
          <div className="content">
              <div> 
                <video className='main-video' src="/image/common/main.mp4" type="video/mp4" width="1440px" autoPlay muted loop playsInline></video>
              </div>
          </div>
          <Footer></Footer>
      </div>
    );
}

export default Home;

