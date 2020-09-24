import React from 'react';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ArtContent from '../components/Content/ArtContent'
import Comment from '../components/Comment/Comment'
import Title from '../components/Title/Title'
import '../assets/main.css'


const ArtDetail = (props) =>{
    return (
        <div className="App">
          <Header state="작품"></Header>
          <div className="content">
            <Title main="작품이름" sub="이름"></Title>
            <ArtContent></ArtContent>
            <Comment idx={props.match.params.idx}></Comment>
          </div>
          <Footer></Footer>
      </div>
    );
}

export default ArtDetail;

