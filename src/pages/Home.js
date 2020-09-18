import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


const Home = () =>{
    return (
        <div className="App">
          <Header></Header>
          <Container className="content">
            <Row>
              <Col> 
                <Image src="/image/main/main.jpg" className="Main-logo" alt="logo" fluid />
              </Col>
            </Row>
          </Container>
          <Footer></Footer>
      </div>
    );
}

export default Home;

