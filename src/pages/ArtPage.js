//졸업자 게시판
import React,{useState,useEffect} from 'react';
import Picture from '../components/Profile/Picture'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../assets/Picture.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
              <div className = "row1">{
                state.data.map((art) => {
                    return(
                     <Link to = {`detail/${art.id}`}>
                     <Picture name={art.title} image={art.thumbnail_path}></Picture>
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