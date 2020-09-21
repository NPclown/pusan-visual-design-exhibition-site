import React, {useState} from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const showNavbar = () => setNavbar(!navbar)

    return(
        <nav className="NavbarItems">
            <div className="menu-icon" onClick={showNavbar}>
                <i className={navbar ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={navbar ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
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