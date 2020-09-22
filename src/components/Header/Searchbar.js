
import React from 'react';
import './Searchbar.css'

const Searchbar = () => {

    const search = () => {
        alert('search')   
    }

    return(
        <div className="SearchBarItems">
            <div className='selector'>
                <select className='selector' name="select">
                    <option value="이름">이름</option>
                    <option value="작품명">작품명</option>
                </select>
            </div>
            <div>
                <input></input>
            </div>
            <i onClick={search} className='fas fa-search'></i>
        </div>
    )
}

export default Searchbar