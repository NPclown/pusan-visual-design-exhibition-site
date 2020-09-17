import React from 'react';
import {Image} from 'react-bootstrap'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const Home = () =>{
    return (
        <div className="App">
          <Header></Header>
          <Image src="/image/main/main.jpg" className="Main-logo" alt="logo" fluid />
          <Footer></Footer>
      </div>
    );
}

export default Home;