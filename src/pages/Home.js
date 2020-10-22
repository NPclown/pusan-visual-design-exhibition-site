import React, { useEffect } from 'react';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Home = (props) =>{

    useEffect(() => {
      if(document.cookie.split('=')[1] === 'true'){

      }else{
        window.open("/popup", "window", "width=405px,height=600px,toolbar=no,scrollbars=no");
      }
    })

    return (
        <div className="App">
          <Header state="홈"></Header>
          <div className="content">
              <div> 
                <video className='main-video' src="/image/common/main.mp4" type="video/mp4" autoPlay muted loop playsInline></video>
              </div>
          </div>
          <Footer type={true}></Footer>
      </div>
    );
}

export default Home;

