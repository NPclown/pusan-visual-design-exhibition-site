//졸업자 게시판
import React,{useState,useEffect} from 'react';
import Picture from '../components/Profile/Picture'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../assets/Picture.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Title from '../components/Title/Title'

const Graduate = (props) => {
  
  const [state, setState] = useState({isLoading : true, data : []})

  useEffect(() => {
    const getData = async() => {
        try{
            var result = await axios.get(`/api/get_profile_list`);
            setState({isLoading : false, data : result.data})
        } catch(error) {
            alert(error)
            setState({isLoading : false, data : []})
        }
    }
    getData();
},[props.id])

  return state.isLoading ? (
    <div className="loading">
        <span>Loading...</span>
    </div>) : (
        <div className="Graduate">
          <Header state="프로필"></Header>
            <div className = "content">
            <Title sub="프로필을 클릭하거나 이름을 검색하여 원하는 분의 작품을 볼 수 있습니다."></Title>
              <div className = "row1">{
              state.data.map((person) => {
                return(
                  <Link to = {`profile/detail/${person.id}`}>
                  <Picture name={person.name} image={person.thumbnail_path}></Picture>
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


  export default Graduate;