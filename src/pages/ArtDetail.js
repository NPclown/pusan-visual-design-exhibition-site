import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ArtContent from '../components/Content/ArtContent'
import Comment from '../components/Comment/Comment'
import Title from '../components/Title/Title'
import '../assets/main.css'


const ArtDetail = (props) =>{

    const [state, setState] = useState({isLoading : true, art : []})

    useEffect(() => {
        const getData = async() => {
            try{
                var result = await Axios.get(`/api/get_article_detail?article_id=${props.match.params.idx}`);
                setState({isLoading : false, art : result.data})
            } catch(error) {
                alert(error)
                setState({isLoading : false, art : []})
            }
        }
        getData();
    },[props.match.params.idx])

    return (
        <div className="App">
          <Header state="작품"></Header>
            {state.isLoading ? (
            <div className="content">
              <div className="loading">
                <span>Loading...</span>
              </div>
            </div>
            ) : (
            <div className="content">
              <Title main={state.art.title} sub={state.art.maker}></Title>
              <ArtContent image={state.art.img_path} video=""></ArtContent>
              <Comment idx={state.art.id}></Comment>
            </div>
            )}
          <Footer></Footer>
      </div>
    );
}

export default ArtDetail;

