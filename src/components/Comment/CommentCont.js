import React from 'react';

const CommentCont = (props) =>{
    return (
        <div className="group" key={props.id}>
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