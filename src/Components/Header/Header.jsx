import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";

export default function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="header_wrapper">
                    <div className="header_left">
                        <RxHamburgerMenu className='header_burger' />

                        <div className="header_search_icon_input">
                            <FiSearch className='header_search_icon' />
                            <input type="text" className='header_input' placeholder='Search' />
                        </div>
                    </div>

                    <div className="header_right">
                        <IoMdNotifications className='header_notice' />

                        <p className='header_language'>
                            <span>RU</span> / <span>KG</span>
                        </p>

                        <div className="header_profile">
                            <img className='header_profile_avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaeVfXxyG1sNBohvr-x5NOCzM9lvcF_pTzA&s" alt="" />

                            <div className="header_profile_data">
                                <h4 className='header_profile_name'>Umarov Ali</h4>
                                <p className='header_profile_title'>Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
