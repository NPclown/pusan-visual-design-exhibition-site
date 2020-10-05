import React from 'react';
import Navbar from './Navbar';
import Searchbar from './Searchbar';

const Header = (props) =>{
    return (
        <div className="header"> 
            <Navbar state={props.state} sub={props.sub}></Navbar>
            <Searchbar></Searchbar>
        </div>
    );
}

export default Header;