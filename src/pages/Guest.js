import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';
import {Image} from 'react-bootstrap';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import GuestRegister from '../components/Guest/GuestRegister'
import GuestCont from '../components/Guest/GuestCont'
import Title from '../components/Title/Title'
import Loading from '../components/Etc/Loading'

import '../assets/guestpage.css'

const Guest = () =>{
    const [state, setState] = useState({isLoading : true, state : false, data : {}})

    const getData = async() => {
      try{
          var result = await Axios.get(`/api/get_guest_book`);
          setState({isLoading : false, state: result.data.state, data : result.data.data})
      } catch(error) {
          alert(error)
          setState({isLoading : false, state: false, data : []})
      }
    }
    useEffect(() => {
      getData();
    },[])

    return (
        <div className="App">
          <Header state="방명록"></Header>
          {
            state.isLoading ? (
              <Loading></Loading>
            ) : (
              state.state ? (
                <div className="content">
                  <Title></Title>
                  <div className="guest-logo">  
                      <Image src="/image/common/logo.png" alt="logo" fluid />
                  </div>
                  <div className="font-s26-w7-g9">
                      2020 부산대학교 디자인학과 시각디자인전공 졸업전시<br/>
                      열여덟 개의 지향점을 응원하며
                  </div>
                  <GuestRegister getData={() => getData()}></GuestRegister>
                  <div className="guest-list">
                    {
                      state.data.map((item, index) => (
                          <GuestCont key={index} id={item.id} cont={item.comment} date={item.upload_date}></GuestCont>
                      ))
                    }
                  </div>
                </div>
              ) : (
                <Redirect to="/error"></Redirect>
              )
            )
          }
          <Footer></Footer>
      </div>
    );
}

export default Guest;

