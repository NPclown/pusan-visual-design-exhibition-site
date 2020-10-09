import React,{useState,useEffect} from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ArtPicture from '../components/Art/ArtPicture'
import Loading from '../components/Etc/Loading';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../assets/ArtPage.css';
import '../assets/main.css'
import '../assets/font.css'
import Title from '../components/Title/Title'

const ArtPage = (props) => {
  const [state, setState] = useState({isLoading : true, data : []})
  const [sub, setSub] = useState("");

  useEffect(() => {
    const getData = async() => {
        try{
            var result = await Axios.get(`/api/get_article_list?type=${props.match.params.type}`);
            setState({isLoading : false, data : result.data})
        } catch(error) {
            alert(error)
            setState({isLoading : false, data : []})
        }
    }
    getData();

    switch(props.match.params.type){
      case "advertising_conti_design":
        setSub("광고콘텐츠디자인");
        break;
      case "design_seminar":
        setSub("디지인세미나");
        break;
      case "digital_media_design":
        setSub("디지털미디어디자인");
        break;
      case "visual_design":
        setSub("시각디자인");
        break;
      default :
        setSub("")
    }

},[props.match.params.type])
  
  return (
      <div className="ArtPage">
        <Header state="작품" sub={sub}></Header>
          {state.isLoading ? (
            <Loading></Loading>
          ) : (
            <div className = "content">
            <Title main={sub} sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."></Title>
              <div className = "art-row1">{
                state.data.map((art, index) => {
                    return(
                      <Link to = {`detail/${art.id}/1`} key={index}>
                        <ArtPicture title = {art.title} maker={art.maker} image={art.thumbnail_path}></ArtPicture>
                      </Link>
                    )
                  }
                )}
              </div>
            </div>
          )}
          <Footer></Footer>
      </div>
  );
 }
  export default ArtPage;