import React from 'react';
import './Title.css';

const Title = (props) =>{
    return (
        <div className="title">
            <div className={props.main ? "main" : ""}>
                {props.main}
            </div>
            <div className="sub">
                {props.sub}
            </div>
        </div>
    );
}

export default Title;