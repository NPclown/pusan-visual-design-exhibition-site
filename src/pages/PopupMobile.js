import React from 'react';
import { useCookies } from 'react-cookie';

import {Image} from 'react-bootstrap';

const Popup = (props) =>{
    const [cookies, setCookies] = useCookies(['popup_mobile']);

    const closePopup = () => {
      setCookies('popup_mobile', true, {path : '/'})
      window.close();
    }

    return (
        <div className="Popup">
          <Image src="/image/common/popup_mobile.jpg"></Image>
          <div className="popup-right">
            오늘 하루 보지 않기&nbsp;&nbsp;
            <input type="checkbox" onChange={closePopup}></input> 
          </div>
          <div className="popup-button">
            <button onClick={e => window.close()}>닫기</button>
          </div>
        </div>
    );
}

export default Popup;

