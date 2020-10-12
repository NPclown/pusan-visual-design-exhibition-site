import React , {useState} from 'react';
import Axios from 'axios';
import {Image} from 'react-bootstrap';

const GuestRegister = (props) =>{
    const [guestbook, setGuestBook] = useState("");
    const [arrows, setArrows] = useState(false);


    const registerGuestBook = async() =>{
        var state = false;
        if (guestbook === ""){
            alert('방명록을 입력해주세요!')
        }else{
            try{
                var result = await Axios.post(`/api/add_guest_book`, {comment : guestbook});
                state = result.data.state
            } catch(error) {
                alert(error)
                state = false
            }
            if (state) {
                alert('방명록 등록에 성공하였습니다!')
                props.getData();
            }else{
                alert('방명록 등록에 실패하였습니다!')
            }
            setGuestBook("")
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            registerGuestBook();
            setArrows(true);
        }
    }
    
    return (
        <div className="guest">
            <div className={arrows ? "guest-arrows active" : "guest-arrows"}>
                <Image src="/image/common/arrows.png" alt="upArrows" fluid />
            </div>
            <div className="guest-register">
                <input className="font-s20-w5-b5 guest-register-input"
                    placeholder="응원의 한 마디를 입력해 주세요. 삭제할 수 없으니 신중하게 작성 부탁드립니다."
                    value={guestbook}
                    onChange={e => setGuestBook(e.target.value)}
                    onKeyDown={e => handleKeyPress(e)}
                    maxLength={80}
                ></input>
                <div className="guest-register-button font-s26-w7-b9" onClick={registerGuestBook}>
                    작성
                </div>
            </div>
        </div>
    );
}

export default GuestRegister;