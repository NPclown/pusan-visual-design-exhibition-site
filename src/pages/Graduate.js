//졸업자 게시판
import React,{useState,useEffect} from 'react';
import Picture from '../components/Profile/Picture'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Loading from '../components/Etc/Loading';
import '../assets/Picture.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

  return (
    <div className="Graduate">
      <Header state="프로필"></Header>
      {state.isLoading ? (
        <Loading></Loading>
      ):(
        <div className = "content">
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
      )}
      <Footer></Footer>
    </div>
  );
 }


  export default Graduate;