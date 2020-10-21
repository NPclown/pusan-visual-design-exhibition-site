import React from 'react';

const GuestCont = (props) =>{
    return (
        <div className="guest-group" id={props.id}>
            <div className="guest-cont font-s16-w5-b9">
                {props.cont}
            </div>
            <div className="guest-date font-s16-w5-b9">
                {props.date}
            </div>
        </div>
    );
}

export default GuestCont;