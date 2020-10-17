import React from 'react';

const Title = (props) =>{
    return (
        <div>
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
            <div className="title-mobile">
                <div className={props.main ? "title-main-mobile font-s15-w7-b9" : ""}>
                    {props.main}
                </div>
                <div className={props.mobile_sub ? "title-sub-mobile font-s12-w5-b5" : ""}>
                    {
                        props.sub ? (
                            props.mobile_sub.map((item, index) => (
                                <span key={index}>{item}&nbsp;</span>
                            ))
                        ): ("")
                    }
                </div>
            </div>
        </div>
    );
}

export default Title;