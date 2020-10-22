import React from 'react';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Profile from '../components/Search/Profile'

import '../assets/searchpage.css';


const Search = (props) =>{
    return (
        <div className="App">
          <Header name={props.match.params.name}></Header>
          <div className="content">
            <div className="search-content">
              <div className="search-title font-s26-w7-b9">
                  <i className='fas fa-search search-icon'></i>
                  '<span className='search-cont'>{props.match.params.name}</span>' 검색 결과입니다.
              </div>
            </div>
            <div className="search-mobile-content">
              <div className="title-mobile">
                  <div className="title-main-mobile font-s15-w7-b9">
                    <i className='fas fa-search search-icon'></i>
                      '<span className='search-cont'>{props.match.params.name}</span>' 검색 결과입니다.
                  </div>
              </div>
            </div>
            <Profile name={props.match.params.name}></Profile>     
          </div>
          <Footer {...props} type={false}></Footer>
      </div>
    );
}

export default Search;

