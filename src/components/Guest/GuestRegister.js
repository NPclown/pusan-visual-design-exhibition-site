import React , {useState} from 'react';
import Axios from 'axios';
import {Image} from 'react-bootstrap';
import "./Guest.css";

const GuestRegister = (props) =>{
    const [guestbook, setGuestBook] = useState("");
    const [state, setState] = useState(false)
    
    const registerGuestBook = async() =>{
        if (guestbook === ""){
            alert('방명록을 입력해주세요!')
        }else{
            try{
                var result = await Axios.post(`/api/add_guest_book`, {comment : guestbook, password : 1111});
                setState(result.data)
            } catch(error) {
                alert(error)
                setState(false)
            }
    
            if (state) {
                alert('방명록 등록에 성공하였습니다!')
            }else{
                alert('방명록 등록에 실패하였습니다!')
            }
        }
    }
    return (
        <div>
            <div className="arrows">
                <Image src="/image/common/upArrows.png" alt="upArrows" fluid />
            </div>
            <div className="register">
                <input className="font-s26-w5-b5 register-input"
                    placeholder="응원의 한 마디를 입력해 주세요. 삭제할 수 없으니 신중하게 작성 부탁드립니다."
                    value={guestbook}
                    onChange={e => setGuestBook(e.target.value)}
                    maxLength={80}
                ></input>
                <div className="register-button font-s26-w7-b9" onClick={registerGuestBook}>
                    작성
                </div>
            </div>
            <div className="arrows">
                <Image src="/image/common/underArrows.png" alt="underArrows" fluid />
            </div>
        </div>
    );
}

export default GuestRegister;