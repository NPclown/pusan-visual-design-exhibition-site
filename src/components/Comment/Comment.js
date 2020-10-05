import React, {useState, useEffect} from 'react';
import CommentCont from './CommentCont';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import './Comment.css'
import {Image, ModalBody} from 'react-bootstrap';
import '../../assets/ModalPage.css'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Comment = (props) =>{
    const [isOpen, setIsOpen] = React.useState(false);
    const [state, setState] = useState({isLoading : true, comments : []})
    const showModal = () => {
        setIsOpen(true);
      };
    
      const hideModal = () => {
        setIsOpen(false);
      };
    useEffect(() => {
        const getData = async() => {
            try{
                var result = await Axios.get(`/api/get_article_comment?article_id=${props.idx}`);
                setState({isLoading : false, comments : result.data})
            } catch(error) {
                alert(error)
                setState({isLoading : false, comments : []})
            }
        }
        getData();
    },[props.idx])

    return state.isLoading ? (
        <div className="loading">
            <span>Loading...</span>
        </div>
        ) : (
        <div className="comment">
            <div className="comment-title">
                <div className="left font-s26-w7-b9">댓글 <span className="font-s18-w5-b9">({state.comments.length})</span></div>
                <div className="right font-s26-w7-b9" onClick={() => showModal(true)}>댓글쓰기</div>
                <Modal show={isOpen}  onHide={hideModal} className = "modal-size" >
                <ModalHeader bsPrefix = "modal-title">
                <div className ="modal-title2">
                    pnuvd
                </div>
                댓글쓰기
                </ModalHeader>
                <ModalBody bsPrefix ="modal-name">
                <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="name" placeholder="5자 이하" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="●●●●" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>댓글</Form.Label>
                    <Form.Control  type="comment" placeholder="작품 감상평 또는 응원의 댓글을 달아주세요.(80자 제한)" />
                </Form.Group>
                </Form>
                </ModalBody>
                <Button onClick={hideModal} variant="success">등록</Button>
                <div onClick={hideModal} variant="close">
                    <Image src="/imgs/x.png" className="x-close" alt="logo" />
                </div>
                </Modal>                
            </div>
            <div className="comment-cont">
                {
                    state.comments.map((item, index) => (
                        <CommentCont key={index} id={item.id} name={item.uploader_name} cont={item.comment} date={item.upload_date} onClick={() => alert(item.id)}></CommentCont>
                    ))
                }
            </div>
        </div>
    );
    
}

export default Comment;

                // <Form>
                // <Form.Group controlId="formGroupEmail">
                //     <Form.Label>이름</Form.Label>
                //     <Form.Control type="email" placeholder="Enter email" />
                // </Form.Group>
                // <Form.Group controlId="formGroupPassword">
                //     <Form.Label>비밀번호</Form.Label>
                //     <Form.Control type="password" placeholder="Password" />
                // </Form.Group>
                // </Form>