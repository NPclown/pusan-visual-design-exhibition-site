import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ArtContent from '../components/Art/ArtContent'
import Comment from '../components/Comment/Comment'
import Title from '../components/Title/Title'
import Loading from '../components/Etc/Loading';

import '../assets/artdetailpage.css'

const ArtDetail = (props) =>{

    const [state, setState] = useState({isLoading : true, state : false, data : {}})

    useEffect(() => {
        const getData = async() => {
            try{
                var result = await Axios.get(`/api/get_article_detail?article_id=${props.match.params.id}`);
                setState({isLoading : false, state : result.data.state, data : result.data.data})
            } catch(error) {
                alert(error)
                setState({isLoading : false, state: false, data : {}})
            }
        }
        getData();
    },[props.match.params.id])

    return (
        <div className="App">
          <Header state="작품"></Header>
            {state.isLoading ? (
              <Loading></Loading>
            ) : (
              state.state ? (
                <div className="content">
                  <Title main={state.data.title} sub={state.data.maker}></Title>
                  <ArtContent image={state.data.img_path} video={state.data.video_path}></ArtContent>
                  <Comment {...props} id={state.data.id}></Comment>
                </div>
              ) : (
                <Redirect to="/error"></Redirect>
              )
            )}
          <Footer></Footer>
      </div>
    );
}

export default ArtDetail;

