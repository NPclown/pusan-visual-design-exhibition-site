import React from 'react';
import Navbar from './Navbar';
import Searchbar from './Searchbar';

const Header = (props) =>{
    return (
        <div className="header"> 
            <Navbar {...props}></Navbar>
            <Searchbar {...props}></Searchbar>
        </div>
    );
}

export default Header;