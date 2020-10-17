import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const Navbar = (props) => {
    return(
        <nav className="nav-bar">
            <div className="nav-menu-mobile">
                <div>
                    <i className='fas fa-bars bars-icon'></i>
                </div>
                <div>
                    <Image className="nav-mobile-img" src="/image/common/logo.png" alt="logo" fluid />
                </div>
            </div>
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
                            <Link className={'광고콘텐츠디자인'===props.sub?'nav-sub-links active font-s22-w7-b9':'nav-sub-links font-s22-w7-b9'} to="/art/acd">
                                광고콘텐츠디자인
                                <i className="fas fa-circle nav-circle"></i>
                            </Link>
                        </li>
                        <li>
                            <Link className={'디자인세미나'===props.sub?'nav-sub-links active font-s22-w7-b9':'nav-sub-links font-s22-w7-b9'} to="/art/ds">
                                디자인세미나
                                <i className="fas fa-circle nav-circle"></i>
                            </Link>
                        </li>
                        <li>
                            <Link className={'디지털미디어디자인'===props.sub?'nav-sub-links active font-s22-w7-b9':'nav-sub-links font-s22-w7-b9'} to="/art/dmd">
                                디지털미디어디자인
                                <i className="fas fa-circle nav-circle"></i>
                            </Link>
                        </li>
                        <li>
                            <Link className={'시각디자인'===props.sub?'nav-sub-links active font-s22-w7-b9':'nav-sub-links font-s22-w7-b9'} to="/art/vd">
                                시각디자인
                                <i className="fas fa-circle nav-circle"></i>
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