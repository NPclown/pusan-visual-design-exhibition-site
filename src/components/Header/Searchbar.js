import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Searchbar.css'

const Searchbar = () => {
    const [search, setSearch] = useState("");
    const [option, setOption] = useState("이름");

    return(
        <div className="SearchBarItems">
            <div className='selector'>
                <select className='selector font-s26-w7-b9' value={option} onChange={e => setOption(e.target.value)}>
                    <option value="이름">이름</option>
                </select>
            </div>
            <div>
                <input id="search"
                    className="font-s26-w7-b5"
                    placeholder="검색어 입력"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                ></input>
            </div>
            <Link to = {`/search/${option==="이름" ? "name" : "title"}/${search}`}><i className='fas fa-search'></i></Link>
        </div>
    )
}

export default Searchbar