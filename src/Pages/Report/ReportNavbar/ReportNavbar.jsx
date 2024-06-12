import React from "react";
import { MdOutlineBugReport } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function ReportNavbar() {
  return (
    <div className="container">
      <nav className="finace__navbar">
        <NavLink to={"/report/student-activity"} className="finace__card">
          <PiStudent className="finace__icon" /> Активность студентов
        </NavLink>
        <NavLink to={"/report/conversioneport"} className="finace__card">
          <FaChalkboardTeacher className="finace__icon" /> Эффективность учителей
        </NavLink>
        <NavLink to={"/report/effectiveness-coursea"} className="finace__card">
          <IoMdTrendingUp className="finace__icon" />  Эффективность курсов
        </NavLink>
        <NavLink to={"/report/application-report"} className="finace__card">
          <MdOutlineBugReport className="finace__icon" /> Отчет по конверсии
        </NavLink>
        <NavLink to={"/report/teacher-effectiveness"} className="finace__card">
          <HiOutlinePencilAlt className="finace__icon" /> Отчет по заявкам
        </NavLink>

      </nav>
    </div>
  );
}
