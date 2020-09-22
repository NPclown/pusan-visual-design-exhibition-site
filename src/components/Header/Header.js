import React from 'react';
import Navbar from './Navbar';
import Searchbar from './Searchbar';

const Header = () =>{
    return (
        <div className="header"> 
            <Navbar></Navbar>
            <Searchbar></Searchbar>
        </div>
    );
}

export default Header;