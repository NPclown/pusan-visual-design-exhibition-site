import React from 'react';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Title from '../components/Title/Title'
import Article from '../components/Search/Article'
import Profile from '../components/Search/Profile'
import '../assets/main.css'
import '../assets/font.css'


const Search = (props) =>{

    return (
        <div className="App">
          <Header></Header>
          <div className="content">
              <Title main="검색결과" sub={props.match.params.search ? "작품명" : "졸업자"}></Title>
              {props.match.params.search ? (<Article title={props.match.params.search}></Article>) : ("")}
              {props.match.params.name ? (<Profile name={props.match.params.name}></Profile>) : ("")}
          </div>
          <Footer></Footer>
      </div>
    );
}

export default Search;

