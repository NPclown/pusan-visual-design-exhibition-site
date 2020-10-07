import React, {useState, useEffect} from 'react';
import CommentCont from './CommentCont';
import Axios from 'axios';
import {Image, Modal, Button, Form} from 'react-bootstrap';
import './Comment.css'
import '../../assets/ModalPage.css'
import '../../assets/DelModal.css'
import Pagination from './Pagination';
import BackArrow from '../Etc/BackArrow';

const Comment = (props) =>{
    const [Name, setName] = useState("");
    const [Pwd, setPwd] = useState("");
    const [Comm, setComm] = useState("");
    const [findPwd, setFindPwd] = useState("");

    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const [deleteId, setDeleteId] = useState("");
    const [state, setState] = useState({isLoading : true, data : []})


    const getData = async() => {
        try{
            var result = await Axios.get(`/api/get_article_comment?article_id=${props.id}&page=${props.page}`);
            setState({isLoading : false, data : result.data})
        } catch(error) {
            alert(error)
            setState({isLoading : false, data : []})
        }
    }

    const registerComment = async() => {
        var result;
        try{
            result = await Axios.post(`/api/add_article_comment`,{article_id : props.id, comment : Comm , uploader_name: Name, password : Pwd});
        } catch(error) {
            alert(error)
        }
        if (result.data) {
            alert(`성공`);
        }else{
            alert(`실패`);
        }
        setIsRegisterOpen(false);
        getData();
    }  

    const deleteComment = async(e, id) => {
        e.preventDefault()
        var result;

        try{
            result = await Axios.post(`/api/del_article_comment`,{article_id : props.id, id : id , password : findPwd}); // api헷갈
        } catch(error) {
            alert(error)
        }
        if (result.data) {
            alert(`성공`);
        }else{
            alert(`실패`);
        }
        setIsDeleteOpen(false);
        getData();
    }  


    useEffect(() => {
        getData();
    },[props.id, props.page])

    return state.isLoading ? (
        <div className="loading">
            <span>Loading...</span>
        </div>
        ) : (
        <div className="comment">
            <div className="comment-title">
                <div className="left font-s26-w7-b9">댓글 <span className="font-s18-w5-b9">({state.data.count})</span></div>
                <div className="right font-s26-w7-b9" onClick={() => setIsRegisterOpen(true)}>댓글쓰기</div>
                <Modal className="modal-size" backdrop="static" show={isRegisterOpen}  onHide={() => setIsRegisterOpen(false)}>
                    <Modal.Header bsPrefix = "modal-title">
                        <Image src="/image/Modal/logo.png" className = "modal-title"/>
                        <div className = "modal-title2">
                            댓글쓰기
                        </div>
                    </Modal.Header>
                    <Modal.Body bsPrefix ="modal-name">
                        <Form className="middle-modal">
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>이름</Form.Label>
                            <Form.Control  value={Name} onChange={e => setName(e.target.value)} className = "myfont-size" placeholder="5자 제한" maxLength="5" />
                        </Form.Group>

                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control value={Pwd} onChange={e => setPwd(e.target.value)} className = "myfont-size" placeholder="●●●●" maxLength="4"/>
                        </Form.Group>

                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>댓글</Form.Label>
                            <Form.Control  className = "comment-form" value={Comm} onChange={e => setComm(e.target.value)}  placeholder="작품 감상평 또는 응원의 댓글을 달아주세요.(80자 제한)" maxLength="80" />
                        </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Button onClick={registerComment} variant="success">등록</Button>
                    <div onClick={() => setIsRegisterOpen(false)} variant="close">
                        <Image src="/imgs/x.png" className="x-close" alt="logo" />
                    </div>
                </Modal>                
            </div>
            <div className="comment-cont">
                {
                    state.data.comments.map((item, index) => (
                        <CommentCont key={index} id={item.id} name={item.uploader_name} cont={item.comment} date={item.upload_date} onClick={() => {setDeleteId(item.id); setIsDeleteOpen(true)}}></CommentCont>
                    ))
                }
            </div>

            <Pagination article_id={props.id} current={props.page} count={state.data.count}></Pagination>
            <BackArrow></BackArrow>

            <Modal backdrop="static" show={isDeleteOpen}  onHide={() => setIsDeleteOpen(false)} className= "modal-size2" >
                <Modal.Header bsPrefix = "modal-title">
                    <Image src="/image/Modal/logo.png" className = "modal-title"/>
                    <div className = "modal-title2">
                    댓글삭제
                    </div>
                </Modal.Header>
                <Modal.Body bsPrefix ="modal-name">
                    <Form className="middle-modal">
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control value={findPwd} onChange={e => setFindPwd(e.target.value)} className = "myfont-size" placeholder="댓글 작성시 입력했던 비밀번호를 입력해 주세요." maxLength="4" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Button onClick={e => deleteComment(e, deleteId)} variant="success">삭제</Button>
                <div onClick={() => setIsDeleteOpen(false)} variant="close">
                    <Image src="/imgs/x.png" className="x-close2" alt="logo" />
                </div>
            </Modal>     
        </div>
        
    );
    
}
export default Comment;

