import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import { BiSolidMoon } from "react-icons/bi";
import { MdWbSunny } from "react-icons/md";
import useDarkModeStore from "../../Store/DarcModeStore";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  useEffect(() => {
    document.body.className = darkMode ? "body_light" : "body_dark";

    return () => {
      document.body.className = "";
    };
  }, [darkMode]);

  return (
    <header className={`${darkMode ? "header" : "header_dark"}`}>
      <div className="container">
        <div className="header_wrapper">
          <div className="header_left">
            <RxHamburgerMenu className="header_burger" />

            <div className="header_search_icon_input">
              <FiSearch
                className={
                  darkMode ? "header_search_icon" : "header_search_icon_dark"
                }
              />
              <input
                type="text"
                className={darkMode ? "header_input" : "header_input_dark"}
                placeholder="Search"
              />
            </div>
          </div>

          <div className="header_right">
            <IoNotifications
              className={darkMode ? "header_notice" : "header_notice_darc"}
            />
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <BiSolidMoon className="soon" />
              ) : (
                <MdWbSunny className="sun" />
              )}
            </button>

            <p className="header_language">
              <span>RU</span> / <span>KG</span>
            </p>

            <div className="header_profile">
              <img
                className="header_profile_avatar"
                src="https://sneg.top/uploads/posts/2023-06/1687987308_sneg-top-p-avatarka-dlya-muzhskoi-gruppi-instagram-69.png"
                alt=""
              />

              <div className="header_profile_data">
                <h4 className="header_profile_name">Умаров Али</h4>
                <p
                  className={
                    darkMode
                      ? "header_profile_title"
                      : "header_profile_title_dark"
                  }
                >
                  Админ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
