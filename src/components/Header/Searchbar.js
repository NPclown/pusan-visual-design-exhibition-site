import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import { Modal} from 'react-bootstrap';

const Searchbar = (props) => {
    const [search, setSearch] = useState(props.name ? props.name : "");
    const [value, setValue] = useState("");
    const [check, setCheck] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const checkSearch = () =>{
        if (search === ""){
            alert("검색어를 입력해주세요");
            setCheck(false);
        }else{
            setCheck(true);
            setValue(search);
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            checkSearch();
        }else{
            setCheck(false)
        }
    }

    return(
        <div className="searchbar">
            <div className="search-item-mobile">
                <i className='fas fa-search searchbar-icon' onClick={() => setIsRegisterOpen(true)}></i>
                <Modal dialogClassName="mobile-modal-content" show={isRegisterOpen}  onHide={() => setIsRegisterOpen(false)}> 
                <div className ="mobile-modal-title font-s15-w5-w9">
                    작품을 보기를 원하는 분의 <br/>
                    이름을 입력해 주세요.<br/>
                </div>
                
                    <input id="search"
                        className="mobile-searchbar-input font-s18-w7-w10"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        onKeyPress={e => handleKeyPress(e)}
                        autoComplete="off"
                    ></input>
                    <i className='fas fa-search mobile-icon' onClick={checkSearch}></i>
                    {
                        check ? (<Redirect to={`/search/name/${value}`} />) : ('')
                    }
            
                
                
                </Modal>
            </div>
            <div className="search-item">
                <div className='searchbar-selector'>
                    <div className='font-s26-w7-b9'>이름</div>
                </div>
                <div>
                    <input id="search"
                        className="searchbar-input font-s26-w7-b5"
                        placeholder="검색어 입력"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        onKeyPress={e => handleKeyPress(e)}
                        autoComplete="off"
                    ></input>
                </div>
                <i className='fas fa-search searchbar-icon' onClick={checkSearch}></i>
                {
                    check ? (<Redirect to={`/search/name/${value}`} />) : ('')
                }
            </div>
        </div>
    )
}

export default Searchbar
