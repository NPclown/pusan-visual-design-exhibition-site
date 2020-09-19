import React from 'react';
import {Image} from 'react-bootstrap'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../assets/main.css'


const Home = () =>{
    return (
        <div className="App">
          <Header></Header>
          <div className="content">
              <div> 
                <Image src="/image/main/main.jpg" className="Main-logo" alt="logo" fluid />
              </div>
          </div>
          <Footer></Footer>
      </div>
    );
}

export default Home;

