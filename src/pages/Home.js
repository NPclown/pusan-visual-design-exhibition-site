import React, { useEffect } from 'react';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Home = (props) =>{

    useEffect(() => {
      const cookie = document.cookie.split(';');

      for ( var i in cookie ) {
        var tmp = String(cookie[i]).trim().split('=');
        if(tmp[0] === 'popup'){
            if(tmp[1] === 'true'){

            }else{
              window.open("/popup", "window", "width=450px, height=700px, toolbar=no, scrollbars=no");
            }
        }else{
          window.open("/popup", "window", "width=450px, height=700px, toolbar=no, scrollbars=no");
        }

        if(tmp[0] === 'popup_mobile'){
          if(tmp[1] !== 'true'){

          }else{
            window.open("/popup/mobile", "window", "width=400px, height=150px, toolbar=no, scrollbars=no");
          }
        }else{
          window.open("/popup/mobile", "window", "width=400px, height=150px, toolbar=no, scrollbars=no");
        }
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

