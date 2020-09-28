import React,{useState,useEffect} from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ArtPicture from '../components/Art/ArtPicture'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/ArtPage.css';
import Title from '../components/Title/Title'

const ArtPage = (props) => {
  const [state, setState] = useState({isLoading : true, data : []})

  useEffect(() => {
    const getData = async() => {
        try{
            var result = await axios.get(`/api/get_article_list?type=${props.match.params.type}`);
            setState({isLoading : false, data : result.data})
        } catch(error) {
            alert(error)
            setState({isLoading : false, data : []})
        }
    }
    getData();
},[props.match.params.type])
  
  return state.isLoading ? (
    <div className="loading">
        <span>Loading...</span>
    </div>) : (
        <div className="ArtPage">
          <Header state="작품"></Header>
            <div className = "content">
            <Title main={props.match.params.type} sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."></Title>
              <div className = "art-row1">{
                state.data.map((art) => {
                    return(
                     <Link to = {`detail/${art.id}`}>
                     <ArtPicture title = {art.title} maker={art.maker} image={art.thumbnail_path}></ArtPicture>
                     </Link>
                )
              }
            )}
              </div>
            </div>
           <Footer></Footer>
        </div>
  );
 }
  export default ArtPage;