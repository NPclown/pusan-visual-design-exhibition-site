import React from 'react';
import CommentCont from './CommentCont';
import Axios from 'axios';

import './Comment.css'
const Comment = (props) =>{
    
    const register = () => {
        alert('댓글 등록!!');
        Axios.get('/api/get_article_comment?article_id=SOfcGSM6NXtpqszVhXMZ8')
        .then((res) => {
            alert('성공')
            console.log(res.data)
        }).catch((err) => {
            alert('실패')
            alert(err)
        })    
    }

    return (
        <div className="comment">
            <div className="comment-title">
                <div className="left">댓글(5)</div>
                <div className="right" onClick={register}>댓글쓰기</div>                
            </div>
            <div className="comment-cont">
                <CommentCont></CommentCont>
                <CommentCont></CommentCont>
                <CommentCont></CommentCont>
                <CommentCont></CommentCont>
                <CommentCont></CommentCont>
            </div>
        </div>
    );
}

export default Comment;