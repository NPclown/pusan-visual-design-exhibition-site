import React from 'react';
import {Container, Row, Col, Dropdown, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () =>{
    return (
        <Container>
            <Row>
                <Col><Link to='/'>Home</Link></Col>
                <Col><Link to='/profile'>프로필</Link></Col>
                <Col><Link to='/art'>작품</Link></Col>
                <Col><Link to='/guest'>방명록</Link></Col>
                <Col><Link to='/about'>졸업주관</Link></Col>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            이름
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">이름</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">작품명</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Form>
                        <Form.Group controlId="formSearch">
                            <Form.Control type="text" placeholder="Search" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <Button variant="primary" type="submit"> 검색 </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;