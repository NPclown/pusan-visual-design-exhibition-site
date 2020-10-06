import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ArtContent from '../components/Content/ArtContent'
import Comment from '../components/Comment/Comment'
import Title from '../components/Title/Title'
import Loading from '../components/Etc/Loading';
import '../assets/main.css'
import '../assets/font.css'


const ArtDetail = (props) =>{

    const [state, setState] = useState({isLoading : true, art : []})

    useEffect(() => {
        const getData = async() => {
            try{
                var result = await Axios.get(`/api/get_article_detail?article_id=${props.match.params.id}`);
                setState({isLoading : false, art : result.data})
            } catch(error) {
                alert(error)
                setState({isLoading : false, art : []})
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
            <div className="content">
              <Title main={state.art[0].title} sub={state.art[0].maker}></Title>
              <ArtContent image={state.art[0].img_path} video=""></ArtContent>
              <Comment id={state.art[0].id}></Comment>
            </div>
            )}
          <Footer></Footer>
      </div>
    );
}

export default ArtDetail;

