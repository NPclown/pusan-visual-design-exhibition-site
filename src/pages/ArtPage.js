import React,{useState,useEffect} from 'react';
import { Link,Redirect } from 'react-router-dom';
import Axios from 'axios';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ArtPicture from '../components/Art/ArtPicture'
import Loading from '../components/Etc/Loading';
import Title from '../components/Title/Title'

import '../assets/artpage.css';

const ArtPage = (props) => {
  const [state, setState] = useState({isLoading : true,state:false, data : []})
  const [sub, setSub] = useState("");

  useEffect(() => {
    const getData = async() => {
        try{
            var result = await Axios.get(`/api/get_article_list?type=${props.match.params.type}`);
            setState({isLoading : false,  state : result.data.state, data : result.data.data})
        } catch(error) {
            alert(error)
            setState({isLoading : false, state: false, data : []})
        }
    }
    getData();

    switch(props.match.params.type){
      case "acd":
        setSub("광고콘텐츠디자인");
        break;
      case "ds":
        setSub("디지인세미나");
        break;
      case "dmd":
        setSub("디지털미디어디자인");
        break;
      case "vd":
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
            state.state?(
              <div className = "content">
              <Title main={sub} sub={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."]}></Title>
                <div className = "art">{
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
            ):(
              <Redirect to="/error"></Redirect>
            )
            )
}
          <Footer></Footer>
      </div>
  );
 }
  export default ArtPage;