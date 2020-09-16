import React from 'react';
import logo from "../../logo.svg";

import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const Home = () =>{
    return (
        <div className="App">
          <Header></Header>
          <img src={logo} className="App-logo" alt="logo" />
          <Footer></Footer>
      </div>
    );
}

export default Home;