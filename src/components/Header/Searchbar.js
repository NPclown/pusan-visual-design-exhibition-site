import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';

const Searchbar = (props) => {
    const [search, setSearch] = useState(props.name ? props.name : "");
    const [option, setOption] = useState("이름");
    const [check, setCheck] = useState(false);

    const checkSearch = () =>{
        if (search === ""){
            alert("검색어를 입력해주세요");
        }else{
            setCheck(true);
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
            <div className='searchbar-selector'>
                <select className='searchbar-selector font-s26-w7-b9' value={option} onChange={e => setOption(e.target.value)}>
                    <option value="이름">이름</option>
                </select>
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
                check ? (<Redirect to={`/search/name/${search}`} />) : ('')
            }
        </div>
    )
}

export default Searchbar
