import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = (props) => {
    return(
        <nav className="NavbarItems">
            <ul className='nav-menu'>
                <li>
                    <Link className={'홈'===props.state?'nav-links active':'nav-links'} to="/">홈</Link>
                </li>
                <li>
                    <Link className={'프로필'===props.state?'nav-links active':'nav-links'} to="/profile">프로필</Link>
                </li>
                <li>
                    <Link className={'작품'===props.state?'nav-links active':'nav-links'} to="#">작품</Link>
                    <ul class="nav-sub-menu">
                        <li>
                            <Link className={'광고콘텐츠디자인'===props.sub?'nav-sub-links active':'nav-sub-links'} to="/art/advertising_conti_design">
                                광고콘텐츠디자인
                                <i class="fas fa-circle circle"></i>
                            </Link>
                        </li>
                        <li>
                            <Link className={'디자인세미나'===props.sub?'nav-sub-links active':'nav-sub-links'} to="/art/design_seminar">
                                디자인세미나
                                <i class="fas fa-circle circle"></i>
                            </Link>
                        </li>
                        <li>
                            <Link className={'디지털미디어디자인'===props.sub?'nav-sub-links active':'nav-sub-links'} to="/art/digital_media_design">
                                디지털미디어디자인
                                <i class="fas fa-circle circle"></i>
                            </Link>
                        </li>
                        <li>
                            <Link className={'시각디자인'===props.sub?'nav-sub-links active':'nav-sub-links'} to="/art/visual_design">
                                시각디자인
                                <i class="fas fa-circle circle"></i>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link className={'방명록'===props.state?'nav-links active':'nav-links'} to="/guest">방명록</Link>
                </li>
                <li>
                    <Link className={'소개'===props.state?'nav-links active':'nav-links'} to="/about">소개</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar