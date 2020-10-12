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
  const [main, setMain] = useState("");
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
        setMain("광고콘텐츠디자인");
        setSub("디자인 마케팅 커뮤니케이션 선행 연구를 통한 IMC 크리에이티브 능력을 향상시키고 졸업전시 발표를 진행한다");
        break;
      case "ds":
        setMain("디자인세미나");
        setSub("경험디자인 방법을 기반으로 하여 학생의 관심사에 맞는 주제와 전시기법을 선 프로젝트를 수행하고 졸업전시를 구성한다");
        break;
      case "dmd":
        setMain("디지털미디어디자인");
        setSub("디지털 컨텐츠 디자인의 제작을 통해 디지털 미디어의 특성을 갖춰, 미디어 영상의 원리와 구조를 이해하고 관련 지식을 탐구한다");
        break;
      case "vd":
        setMain("시각디자인");
        setSub("디자인에 대한 개념적ㆍ논리적 접근을 통해 정보의 시각화에 있어서 매체연구와 편집디자인 프로젝트를 해결하는 능력과 아이디어의 표현능력을 높인다");
        break;
      default :
        setMain("");
        setSub("");
    }

},[props.match.params.type])
  
  return (
      <div className="App">
        <Header state="작품" sub={main}></Header>
          {state.isLoading ? (
            <Loading></Loading>
          ) : (
            state.state?(
              <div className = "content">
              <Title main={main} sub={[sub]}></Title>
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