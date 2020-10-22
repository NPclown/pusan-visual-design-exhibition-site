import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const Navbar = (props) => {
    const [sidebar, setSidebar] = useState(false);
    const [subSidebar, setSubSidebar] = useState(false);

    const showSubSidebar = () => setSubSidebar(!subSidebar);

    return(
        <nav className="nav-bar">
            <div className="nav-menu-mobile">
                <div>
                    <i className='fas fa-bars bars-icon' onClick={e => setSidebar(true)}></i>
                    <ul className={sidebar ? 'side-bar active':'side-bar'}>
                        <i className='fas fa-times times-icon' onClick={e=> setSidebar(false)}></i>
                        <li className='side-menu'>
                            <Link className={'프로필'===props.state?'side-links active font-s20-w7-b9':'side-links font-s20-w7-b9'} to="/profile">프로필</Link>
                        </li>
                        <li className='side-menu'>
                            <Link className={'작품'===props.state?'side-links active font-s20-w7-b9':'side-links font-s20-w7-b9'} to="#" onClick={e => showSubSidebar()}>
                                작품
                                <i className={subSidebar ? "fas fa-caret-up caret-icon" : "fas fa-caret-down caret-icon"}></i>
                            </Link>
                            <ul className={subSidebar ? "side-bar-sub active" :"side-bar-sub"}>
                                <li className="side-sub-menu">
                                    <Link className={'광고콘텐츠디자인'===props.sub?'side-sub-links active font-s20-w7-b9':'side-sub-links font-s20-w7-b9'} to="/art/acd">
                                        광고콘텐츠디자인
                                        <i className="fas fa-circle side-circle"></i>
                                    </Link>
                                </li>
                                <li className="side-sub-menu">
                                    <Link className={'디자인세미나'===props.sub?'side-sub-links active font-s20-w7-b9':'side-sub-links font-s20-w7-b9'} to="/art/ds">
                                        디자인세미나
                                        <i className="fas fa-circle side-circle"></i>
                                    </Link>
                                </li>
                                <li className="side-sub-menu">
                                    <Link className={'디지털미디어디자인'===props.sub?'side-sub-links active font-s20-w7-b9':'side-sub-links font-s20-w7-b9'} to="/art/dmd">
                                        디지털미디어디자인
                                        <i className="fas fa-circle side-circle"></i>
                                    </Link>
                                </li>
                                <li className="side-sub-menu">
                                    <Link className={'시각디자인'===props.sub?'side-sub-links active font-s20-w7-b9':'side-sub-links font-s20-w7-b9'} to="/art/vd">
                                        시각디자인
                                        <i className="fas fa-circle side-circle"></i>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className='side-menu'>
                            <Link className={'방명록'===props.state?'side-links active font-s20-w7-b9':'side-links font-s20-w7-b9'} to="/guest">방명록</Link>
                        </li>
                        <li className='side-menu'>
                            <Link className={'소개'===props.state?'side-links active font-s20-w7-b9':'side-links font-s20-w7-b9'} to="/about">소개</Link>
                        </li>
                        <li className="side-menu-logo">
                            <Link to='/'>
                                <Image className="nav-mobile-img" src="/image/common/logo.png" alt="logo" fluid />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to='/'>
                        <Image className="nav-mobile-img" src="/image/common/logo.png" alt="logo" fluid />
                    </Link>
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