import React from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'

const Navbar = (props) => {
    return(
        <nav className="NavbarItems">
            <ul className='nav-menu'>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.title===props.state?item.cActive:item.cName} href={item.url}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar