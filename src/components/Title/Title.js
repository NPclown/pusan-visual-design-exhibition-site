import React from 'react';

const Title = (props) =>{
    return (
        <div className="title">
            <div className={props.main ? "title-main font-s26-w7-b9" : ""}>
                {props.main}
            </div>
            <div className={props.sub ? "title-sub font-s18-w5-b9" : ""}>
                {
                    props.sub ? (
                        props.sub.map((item, index) => (
                            <span key={index}>{item}&nbsp;</span>
                        ))
                    ): ("")
                }
            </div>
        </div>
    );
}

export default Title;