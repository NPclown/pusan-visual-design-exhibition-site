import React from 'react';

const CommentCont = (props) =>{
    return (
        <div className="group" id={props.id}>
            <li className="write font-s16-w7-b9">
                {props.name}
            </li>
            <li className="cont font-s16-w5-b9">
                {props.cont}
                <i className="fas fa-trash trash-icon" onClick={props.onClick}></i>
            </li>
            <li className="date font-s16-w5-b9">
                {props.date}
            </li>
        </div>
    );
}

export default CommentCont;