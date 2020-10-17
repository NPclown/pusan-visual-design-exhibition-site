import React, {useState, useEffect} from 'react';
import {Image, Modal, Button, Form} from 'react-bootstrap';
import Axios from 'axios';

import CommentCont from './CommentCont';
import Pagination from './Pagination';
import BackArrow from '../Etc/BackArrow';

import '../../assets/modal.css'
import { Redirect } from 'react-router-dom';

const Comment = (props) =>{
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const [comm, setComm] = useState("");
    const [findPwd, setFindPwd] = useState("");

    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const [deleteId, setDeleteId] = useState("");
    const [state, setState] = useState({isLoading : true, state : false, data : {}})

    const [page, setPage] = useState(1);

    const getData = async() => {
        try{
            var result = await Axios.get(`/api/get_article_comment?article_id=${props.id}&page=${page}`);
            setState({isLoading : false, state : result.data.state, data : result.data.data})
        } catch(error) {
            alert(error)
            setState({isLoading : false, state : result.data.state, data : {}})
        }
    }

    const registerComment = async() => {
        var result;
	var name_blank = String(name).trim();
	var pwd_blank = String(pwd).trim();
	var comm_blank = String(comm).trim();

        if(name_blank === "" || pwd_blank === "" || comm_blank ==="" ){
            alert('빈칸을 채워주세요!')
        }else if(pwd.length < 4){
            alert('비밀번호 4자리를 입력해주세요!')
        }else{
            try{
                result = await Axios.post(`/api/add_article_comment`,{article_id : props.id, comment : comm_blank , uploader_name: name_blank, password : pwd_blank});
            } catch(error) {
                alert(error)
            }
            if (result.data.state) {
                alert(`등록되었습니다.`);
                getData();
            }else{
                alert(`등록실패`);
            }
            setIsRegisterOpen(false);
            setName("")
            setPwd("")
            setComm("")
        }
    }  

    const deleteComment = async(e, id) => {
        e.preventDefault()

        var result;
	var findPwd_blank = String(findPwd).trim();

        if(findPwd_blank === ""){
            alert('비밀번호를 입력해주세요.')
        }else if(findPwd.length < 4){
            alert('비밀번호 4자리를 입력해주세요!')
        }else{
            try{
                result = await Axios.post(`/api/del_article_comment`,{article_id : props.id, id : id , password : findPwd_blank});
            } catch(error) {
                alert(error)
            }
            if (result.data.state) {
                alert(`삭제되었습니다.`);
		getData();
            }else{
                alert(`삭제실패`);
            }
            setIsDeleteOpen(false);
            setFindPwd("")
        }
    }  

    useEffect(() => {
        getData();
    },[props.id, page])

    return state.isLoading ? (
        <div className="loading">
            <span>Loading...</span>
        </div>
        ) : (
        state.state ? (
            <div className="comment">
                <div className="comment-title">
                    <div className="comment-title-left font-s26-w7-b9">댓글 <span className="font-s18-w5-b9">({state.data.count})</span></div>
                    <div className="comment-title-right font-s26-w7-b9" onClick={() => setIsRegisterOpen(true)}>댓글쓰기</div>
                    <Modal className="modal-size" backdrop="static" show={isRegisterOpen}  onHide={() => setIsRegisterOpen(false)}>
                        <Modal.Header bsPrefix = "modal-title">
                            <Image src="/image/common/logo.png" className = "modal-title mobile-modalcomm-title" />
                            <div className = "modal-title2 font-s18-w7-b9">
                                댓글쓰기
                            </div>
                            <div onClick={() => setIsRegisterOpen(false)} variant="close">
                            <Image src="/image/common/x.png" className="x-close" alt="logo" />
                            </div>
                        </Modal.Header>
                        <Modal.Body bsPrefix ="modal-form font-s18-w7-b9">
                            <Form className="middle-modal">
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>이름</Form.Label>
                                    <Form.Control  value={name} onChange={e => setName(e.target.value)} className = "font-s14-w5-b5" autoComplete="off" placeholder="5자 제한" maxLength="5" />
                                </Form.Group>

                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>비밀번호</Form.Label>
                                    <Form.Control value={pwd} onChange={e => setPwd(e.target.value)} className = "font-s14-w5-b5" autoComplete="off" placeholder="●●●●" maxLength="4" type='password'/>
                                </Form.Group>

                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>댓글</Form.Label>
                                    <Form.Control as ='textarea' value={comm} onChange={e => setComm(e.target.value)} className = "comment-form font-s14-w5-b5" autoComplete="off" placeholder="작품 감상평 또는 응원의 댓글을 달아주세요.(80자 제한)" maxLength="80" type='textarea'/>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Button onClick={registerComment} variant="success" className="font-s18-w7-w9">등록</Button>

                    </Modal>                
                </div>
                <div className="comment-cont">
                    {
                        state.data.comments.map((item, index) => (
                            <CommentCont key={index} id={item.id} name={item.uploader_name} cont={item.comment} date={item.upload_date} onClick={() => {setDeleteId(item.id); setIsDeleteOpen(true)}}></CommentCont>
                        ))
                    }
                </div>

                { 
                    state.data.count ? (
                        <Pagination getData={(page) => setPage(page)} article_id={props.id} current={page} count={state.data.count}></Pagination>
                    ) : ("")
                }   
                <BackArrow {...props} path={`/art/${props.type}`}></BackArrow>

                <Modal backdrop="static" show={isDeleteOpen}  onHide={() => setIsDeleteOpen(false)} className= "modal-del-size" >
                    <Modal.Header bsPrefix = "modal-title">
                        <Image src="/image/common/logo.png" className = "modal-title mobile-modalcomm-title"/>
                        <div className = "modal-title2 font-s18-w7-b9">
                            댓글삭제
                        </div>
                        <div onClick={() => setIsDeleteOpen(false)} variant="close">
                            <Image src="/image/common/x.png" className="x-close" alt="logo" />
                        </div>
                    </Modal.Header>
                    <Modal.Body bsPrefix ="modal-form">
                        <Form className="middle-modal" onSubmit={e => e.preventDefault()}>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label className="font-s18-w7-b9">비밀번호</Form.Label>
                                <Form.Control value={findPwd} onChange={e => setFindPwd(e.target.value)} autoComplete="off" className = "font-s14-w5-b5" placeholder="댓글 작성시 입력했던 비밀번호를 입력해 주세요." maxLength="4" type='password'/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Button onClick={e => deleteComment(e, deleteId)} variant="success" className="font-s18-w7-w9">삭제</Button>

                </Modal>     
            </div>
        ) : (
            <Redirect to="/error"></Redirect>
        )
    );
    
}
export default Comment;

