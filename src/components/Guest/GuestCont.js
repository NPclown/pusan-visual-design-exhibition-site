import React from 'react';

const GuestCont = (props) =>{
    return (
        <div className="guest-group" id={props.id}>
            <li className="guest-cont font-s16-w5-b9">
                {props.cont}
            </li>
            <li className="guest-date font-s16-w5-b9">
                {props.date}
            </li>
        </div>
    );
}

export default GuestCont;