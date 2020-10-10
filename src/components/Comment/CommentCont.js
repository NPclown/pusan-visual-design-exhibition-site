import React from 'react';

const CommentCont = (props) =>{
    return (
        <div className="comment-group" id={props.id}>
            <li className="comment-group-write font-s16-w7-b9">
                {props.name}
            </li>
            <li className="comment-group-cont font-s16-w5-b9">
                {props.cont}
                <i className="fas fa-trash trash-icon" onClick={props.onClick}></i>
            </li>
            <li className="comment-group-date font-s16-w5-b9">
                {props.date}
            </li>
        </div>
    );
}

export default CommentCont;