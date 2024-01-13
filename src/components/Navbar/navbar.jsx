import React from 'react';
import './navbar.css'
import Logo from '../../assets/logo.jpeg';
import { FaSearch, FaNewspaper } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { CiViewList, CiBellOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoExitOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div>
            <section id="navbar">
                <div className="topMenu">
                <img src={Logo} alt="Rapid Quest Logo" className="image" />
                <FaSearch className="searchBtn"/>
                </div>
                <div className="middleMenu">
                <GoHome className="homeIcon"/>
                <FaNewspaper className="newsIcon"/>
                <CiViewList className="listIcon"/>
                <CgProfile className="profileIcon"/>
                <div className="bottomMenu">
                    <CiBellOn className="bellIcon"/>
                    <IoExitOutline className="exitIcon"/>
                </div>
                </div>
            </section>
        </div>
    );
}

export default Navbar;
