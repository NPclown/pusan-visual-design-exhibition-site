/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Container, Row, Col, Dropdown, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import '../../assets/header.css'



const Header = () =>{
    return (
        <Container className="header"> 
            <Row>
                <Col md={1}><Link to='/'>Home</Link></Col>
                <Col md={1}><Link to='/profile'>프로필</Link></Col>
                <Col md={1}><Link to='/art'>작품</Link></Col>
                <Col md={1}><Link to='/guest'>방명록</Link></Col>
                <Col md={1}><Link to='/about'>졸업주관</Link></Col>
                <Col md={{span:5, offset:2}}>
                    <Form>
                        <Form.Row className="align-items-center">
                            <Col xs="auto" className="my-1">
                            <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                Preference
                            </Form.Label>
                            <Form.Control
                                as="select"
                                className="mr-sm-2"
                                id="inlineFormCustomSelect"
                                custom
                            >
                                <option value="0">이름</option>
                                <option value="1">작품명</option>
                            </Form.Control>
                            </Col>
                            <Col xs="auto" className="my-1">
                            <Form.Label htmlFor="inlineFormInputName" srOnly>
                                Search
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="Search..." />
                            </Col>
                            <Col xs="auto" className="my-1">
                            <Button type="submit">Search</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>               
            </Row>
        </Container>
    );
}

export default Header;