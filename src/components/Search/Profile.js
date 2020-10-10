import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import Picture from '../Profile/Picture'
import Loading from '../Etc/Loading'

const Profile = (props) =>{
    const [state, setState] = useState({isLoading : true, state : false, data : []})

    useEffect(() => {
      const getData = async() => {
          try{
              var result = await Axios.get(`/api/search_profile?name=${props.name}`);
              setState({isLoading : false, state : result.data.state, data : result.data.data})
          } catch(error) {
              alert(error)
              setState({isLoading : false, state : false, data : []})
          }
      }
      getData();
    },[props.name])

    return state.isLoading ? (
        <Loading></Loading>
      ) : (
        state.state ? (
        state.data.length === 0 ? (
          <div className='search-fail font-s26-w5-b9'>
            찾으시는 검색결과가 없습니다. 검색어가 올바르게 입력되었는지 확인해 주세요.
          </div>
        ) :(
          <div className = "profile-row">{
              state.data.map((person, index) => {
                return(
                  <Link to = {`/profile/detail/${person.id}`} key={index}>
                    <Picture name={person.name} image={person.thumbnail_gray} image_color={person.thumbnail_color}></Picture>
                  </Link>
                )
              }
            )}
          </div>
        )
      ) : (
        <Redirect to='/error'></Redirect>
      )
      );
}

export default Profile;