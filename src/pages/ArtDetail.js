import React from 'react';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ArtContent from '../components/Content/ArtContent'
import Comment from '../components/Comment/Comment'
import '../assets/main.css'


const ArtDetail = (props) =>{
    return (
        <div className="App">
          <Header state="작품"></Header>
          <div className="content">
            <div>제목 및 이름 컴포넌트 자리</div>
            <ArtContent></ArtContent>
            <Comment idx={props.match.params.idx}></Comment>
          </div>
          <Footer></Footer>
      </div>
    );
}

export default ArtDetail;

