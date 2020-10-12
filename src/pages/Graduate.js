//졸업자 게시판
import React,{useState,useEffect} from 'react';
import { Link , Redirect} from 'react-router-dom';
import Axios from 'axios';

import Picture from '../components/Profile/Picture'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Loading from '../components/Etc/Loading';
import Title from '../components/Title/Title'

import '../assets/profilepage.css';

const Graduate = (props) => {
  
  const [state, setState] = useState({isLoading : true,state:false, data : []})

  useEffect(() => {
    const getData = async() => {
        try{
            var result = await Axios.get(`/api/get_profile_list`);
            setState({isLoading : false, state: result.data.state , data : result.data.data})

        } catch(error) {
            alert(error)
            setState({isLoading : false, state:false, data : []})
        }
    }
    getData();
},[props.id])

  return (
    <div className="App">
      <Header state="프로필"></Header>
      {state.isLoading ? (
        <Loading></Loading>
      ):(
        state.state?(
          <div className = "content">
          <Title sub={["프로필을 클릭하거나 이름을 검색하여 원하는 분의 작품을 볼 수 있습니다."]}></Title>
          <div className = "profile-row">{
                  state.data.map((person, index) => {
                    return(
                      <Link to = {`profile/detail/${person.id}`} key={index}>
                        <Picture title = {person.title} name={person.name} image={person.thumbnail_gray} image_color={person.thumbnail_color}></Picture>
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
  export default Graduate;