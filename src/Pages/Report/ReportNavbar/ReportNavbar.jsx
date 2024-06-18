import React from "react";
import { MdOutlineBugReport } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import useDarkModeStore from "../../../Store/DarcModeStore";

export default function ReportNavbar() {
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <div className="container">
      <nav className="finace__navbar">
        <NavLink to={"/report/student-activity"} className={`${darkMode ? "finace__card-light" : "finace__card-dark"}`}>
          <PiStudent className="finace__icon" /> Активность студентов
        </NavLink>
        <NavLink to={"/report/conversioneport"} className={`${darkMode ? "finace__card-light" : "finace__card-dark"}`}>
          <FaChalkboardTeacher className="finace__icon" /> Эффективность учителей
        </NavLink>
        <NavLink to={"/report/effectiveness-coursea"} className={`${darkMode ? "finace__card-light" : "finace__card-dark"}`}>
          <IoMdTrendingUp className="finace__icon" />  Эффективность курсов
        </NavLink>
        <NavLink to={"/report/application-report"} className={`${darkMode ? "finace__card-light" : "finace__card-dark"}`}>
          <MdOutlineBugReport className="finace__icon" /> Отчет по конверсии
        </NavLink>
        <NavLink to={"/report/teacher-effectiveness"} className={`${darkMode ? "finace__card-light" : "finace__card-dark"}`}>
          <HiOutlinePencilAlt className="finace__icon" /> Отчет по заявкам
        </NavLink>

      </nav>
    </div>
  );
}
