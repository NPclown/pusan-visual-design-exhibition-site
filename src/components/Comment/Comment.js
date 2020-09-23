import React from 'react';
import CommentCont from './CommentCont';

import './Comment.css'
const Comment = (props) =>{
    return (
        <div className="comment">
            <div className="comment-title">
                <div className="left">댓글(6)</div>
                <div className="right">댓글쓰기</div>                
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