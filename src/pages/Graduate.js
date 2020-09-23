//졸업자 게시판
import React from 'react';
import Picture from '../components/Profile/Picture'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../assets/Picture.css';
import { HashRouter , MemoryRouter ,Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const persons = [
  { idx:1, name:'LEE', subject:'과목1',image:'/image/박보검.JPG'},
  { idx:2,name:'SON', subject:'과목1',image:'/image/박보검.JPG'},
  { idx:3,name:'HONG', subject:'과목1',image:'/image/박보검.JPG'},
  { idx:4,name:'hyun', subject:'과목1',image:'/image/박보검.JPG'},
  { idx:5, name:'park', subject:'과목1',image:'/image/박보검.JPG'},
  { idx:6, name:'dong', subject:'과목2',image:'/image/박보검.JPG'},
  { idx:7, name:'yaya', subject:'과목2',image:'/image/박보검.JPG'},
  { idx:8, name:'yaya', subject:'과목3',image:'/image/박보검.JPG'},
  { idx:9, name:'yaya', subject:'과목3',image:'/image/박보검.JPG'},
  { idx:10,name:'yaya', subject:'과목3',image:'/image/박보검.JPG'},
  { idx:11,name:'yaya', subject:'과목3',image:'/image/박보검.JPG'},
  { idx:12,name:'yaya', subject:'과목3',image:'/image/박보검.JPG'},
  { idx:13,name:'yaya', subject:'과목3',image:'/image/박보검.JPG'},
  { idx:14,name:'yaya', subject:'과목4',image:'/image/박보검.JPG'},
  { idx:15,name:'yaya', subject:'과목4',image:'/image/박보검.JPG'},
  { idx:16,name:'yaya', subject:'과목4',image:'/image/박보검.JPG'},
]

const Graduate=({match})=> {  
    return (
        <div className="Graduate">
          <Header></Header>
          <div className = "content">
              <div className = "row1">
                {persons.map((person,index) => {
                return (
                  <Link to = {`profile/detail/${person.idx}`}>
                  <Picture name = {person.name} image = {person.image} subject = {person.subject} idx={person.idx}></Picture>
                  </Link>
                  )
                }) 
                }
              </div>
          </div>
          <Footer></Footer>
      </div>
    )
}

  export default Graduate;
  //       <button onClick={goNextPost}>Next post</button>