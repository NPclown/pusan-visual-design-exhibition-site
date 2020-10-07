import React from 'react';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Profile from '../components/Search/Profile'
import '../assets/main.css'
import '../assets/font.css'
import '../components/Search/Search.css';


const Search = (props) =>{
    return (
        <div className="App">
          <Header name={props.match.params.name}></Header>
          <div className="content">
            <div className="search-title font-s26-w7-b9">
                <i className='fas fa-search search-icon'></i>
                '<span className='search-cont'>{props.match.params.name}</span>' 검색 결과입니다.
            </div>
            <Profile name={props.match.params.name}></Profile>     
          </div>
          <Footer></Footer>
      </div>
    );
}

export default Search;

