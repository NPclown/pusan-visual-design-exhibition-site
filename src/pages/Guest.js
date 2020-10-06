import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Image} from 'react-bootstrap';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import GuestRegister from '../components/Guest/GuestRegister'
import GuestCont from '../components/Guest/GuestCont'
import '../assets/main.css'
import '../assets/font.css'
import '../components/Guest/Guest.css'

const Guest = () =>{
    const [state, setState] = useState({isLoading : false, data : []})
    const getData = async() => {
      try{
          var result = await Axios.get(`/api/get_guest_book`);
          setState({isLoading : false, data : result.data})
      } catch(error) {
          alert(error)
          setState({isLoading : false, data : []})
      }
    }
    useEffect(() => {
      getData();
    },[])

    return (
        <div className="App">
          <Header state="방명록"></Header>
          <div className="content">
            <div className="guest-logo">  
                <Image src="/image/common/logo.png" alt="logo" fluid />
            </div>
            <div className="font-s26-w7-g9">
                2020 부산대학교 디자인학과 시각디자인전공 졸업전시<br/>
                열여덟 개의 지향점을 응원하며
            </div>
            <GuestRegister getDate={() => getData()}></GuestRegister>
            <div className="guest-list">
              {
                state.data.map((item, index) => (
                    <GuestCont key={index} id={item.id} cont={item.comment} date="2020-09-21" onClick={() => alert(item.id)}></GuestCont>
                ))
              }
            </div>
          </div>
          <Footer></Footer>
      </div>
    );
}

export default Guest;

