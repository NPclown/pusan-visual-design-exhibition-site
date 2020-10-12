import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';

const Searchbar = (props) => {
    const [search, setSearch] = useState(props.name ? props.name : "");
    const [value, setValue] = useState("");
    const [check, setCheck] = useState(false);

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
    )
}

export default Searchbar
