//졸업자 게시판
import React from 'react';
import Picture from '../components/Profile/Picture'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Container } from 'react-bootstrap';
import { Row, Col} from 'react-bootstrap';
import '../assets/Picture.css'

const persons = [
  { name:'LEE', subject:'과목1',image:'/image/박보검.JPG'},
  { name:'SON', subject:'과목1',image:'/image/박보검.JPG'},
  { name:'HONG', subject:'과목1',image:'/image/박보검.JPG'},
  { name:'hyun', subject:'과목1',image:'/image/박보검.JPG'},
  { name:'park', subject:'과목1',image:'/image/박보검.JPG'},
  { name:'dong', subject:'과목2',image:'/image/박보검.JPG'},
  { name:'yaya', subject:'과목2',image:'/image/박보검.JPG'},
  { name:'yaya', subject:'과목3',image:'/image/박보검.JPG'},
  { name:'yaya', subject:'과목3',image:'/image/박보검.JPG'},
  { name:'yaya', subject:'과목3',image:'/image/박보검.JPG'},
  { name:'yaya', subject:'과목3',image:'/image/박보검.JPG'},
  { name:'yaya', subject:'과목3',image:'/image/박보검.JPG'},
  { name:'yaya', subject:'과목3',image:'/image/박보검.JPG'},
  { name:'yaya', subject:'과목4',image:'/image/박보검.JPG'},
  { name:'yaya', subject:'과목4',image:'/image/박보검.JPG'},
  { name:'yaya', subject:'과목4',image:'/image/박보검.JPG'},
]

function Graduate() {
    return (
        <div className="Graduate">
          <Header></Header>
          <Container>
            <Row>
              {persons.map((person,index) => {
              return (
                <Picture name = {person.name} image = {person.image} subject = {person.subject}></Picture>
                )
              }
              ) //map( 의 ')'
              }
            </Row>
          </Container>
          <Footer></Footer>
      </div>
    )
}



  export default Graduate;
  