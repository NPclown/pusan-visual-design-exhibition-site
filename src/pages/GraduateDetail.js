import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { Redirect} from 'react-router-dom';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Loading from '../components/Etc/Loading';
import Title from '../components/Title/Title'
import ArtPictureDetail from '../components/Art/ArtPictureDetail'
import BackArrow from '../components/Etc/BackArrow'

import '../assets/profiledetailpage.css'

const GraduateDetail = (props)=>{
  const [state, setState] = useState({isLoading : true, state:false, data : {}})

  useEffect(() => {
    const getData = async() => {
        try{
            var result = await Axios.get(`/api/get_profile_detail?user_id=${props.match.params.id}`);
            setState({isLoading : false, state: result.data.state , data : result.data.data})
        } catch(error) {
            alert(error)
            setState({isLoading : false, data : {}})
        }
    }
    getData();
  },[props.match.params.id])

  return state.isLoading ? (
    <div className="loading">
        <Loading></Loading>
    </div>
    ) : (state.state?(      
        <div className ="App">
          <Header state="프로필"></Header>
          <div className ="content">
            <Title sub={["작품을 클릭하면 해당 작품으로 이동됩니다."]}></Title>
            <div className="detail">
              <div className="detail-left">
                <div className="detail-name font-s26-w7-g9">
                  {state.data.name}
                </div>
                <div className="detail-contact font-s18-w7-b9">
                  {state.data.description}
                </div>
              </div>
              <div className="detail-center "></div>
              <ArtPictureDetail 
                vd_name={state.data.vd_name} vd_img = {state.data.vd_thumbnail} acd_name={state.data.acd_name} acd_img={state.data.acd_thumbnail} ds_name={state.data.ds_name} ds_img={state.data.ds_thumbnail} dmd_name={state.data.dmd_name} dmd_img={state.data.dmd_thumbnail} 
                vd_id={state.data.vd_id} acd_id={state.data.acd_id} ds_id={state.data.ds_id} dmd_id={state.data.dmd_id}>     
              </ArtPictureDetail>
            </div>
            <BackArrow {...props} path="/profile"></BackArrow>
          </div>
          <Footer {...props} type={false}></Footer>
      </div>):(
        <Redirect to="/error"></Redirect>
      )
  )
  
    };


export default GraduateDetail
