import React from 'react';

const CommentCont = (props) =>{
    return (
        <div className="group" id={props.key}>
            <li className="write">
                {props.name}
            </li>
            <li className="cont">
                {props.cont}
            </li>
            <li className="date">
                {props.date}
            </li>
        </div>
    );
}

export default CommentCont;