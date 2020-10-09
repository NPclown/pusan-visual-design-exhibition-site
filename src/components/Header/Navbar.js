import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <nav className="navbar">
            <ul className='nav-menu'>
                <li>
                    <Link className={'홈'===props.state?'nav-links active font-s26-w7-b9':'nav-links font-s26-w7-b9'} to="/">홈</Link>
                </li>
                <li>
                    <Link className={'프로필'===props.state?'nav-links active font-s26-w7-b9':'nav-links font-s26-w7-b9'} to="/profile">프로필</Link>
                </li>
                <li>
                    <Link className={'작품'===props.state?'nav-links active font-s26-w7-b9':'nav-links font-s26-w7-b9'} to="#">작품</Link>
                    <ul className="nav-sub-menu">
                        <li>
                            <Link className={'광고콘텐츠디자인'===props.sub?'nav-sub-links active font-s26-w7-b9':'nav-sub-links font-s26-w7-b9'} to="/art/advertising_conti_design">
                                광고콘텐츠디자인
                                <i className="fas fa-circle circle"></i>
                            </Link>
                        </li>
                        <li>
                            <Link className={'디자인세미나'===props.sub?'nav-sub-links active font-s26-w7-b9':'nav-sub-links font-s26-w7-b9'} to="/art/design_seminar">
                                디자인세미나
                                <i className="fas fa-circle circle"></i>
                            </Link>
                        </li>
                        <li>
                            <Link className={'디지털미디어디자인'===props.sub?'nav-sub-links active font-s26-w7-b9':'nav-sub-links font-s26-w7-b9'} to="/art/digital_media_design">
                                디지털미디어디자인
                                <i className="fas fa-circle circle"></i>
                            </Link>
                        </li>
                        <li>
                            <Link className={'시각디자인'===props.sub?'nav-sub-links active font-s26-w7-b9':'nav-sub-links font-s26-w7-b9'} to="/art/visual_design">
                                시각디자인
                                <i className="fas fa-circle circle"></i>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link className={'방명록'===props.state?'nav-links active font-s26-w7-b9':'nav-links font-s26-w7-b9'} to="/guest">방명록</Link>
                </li>
                <li>
                    <Link className={'소개'===props.state?'nav-links active font-s26-w7-b9':'nav-links font-s26-w7-b9'} to="/about">소개</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar