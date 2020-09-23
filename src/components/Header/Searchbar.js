
import React, { useState } from 'react';
import './Searchbar.css'

const Searchbar = () => {
    const [search, setSearch] = useState("");
    const [option, setOption] = useState("이름");

    const submitSearch = (e) => {
        e.preventDefault();
        alert(`옵션: ${option}, 검색어: ${search}`)   
    }

    return(
        <div className="SearchBarItems">
            <div className='selector'>
                <select className='selector' value={option} onChange={e => setOption(e.target.value)}>
                    <option value="이름">이름</option>
                    <option value="작품명">작품명</option>
                </select>
            </div>
            <div>
                <input id="test"
                    placeholder="검색어 입력"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                ></input>
            </div>
            <i onClick={submitSearch} className='fas fa-search'></i>
        </div>
    )
}

export default Searchbar