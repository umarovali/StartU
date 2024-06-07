import React from "react";
import NavbarLink from "./NavbarLink/NavbarLink";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdOutlineGroups } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">LogoSait</div>

      <ul className="navbar_wrapper">
        <NavbarLink href={"/"} icon={<GrHomeRounded />} text={"Главный"} />
        <NavbarLink href={"/applications"} icon={<HiOutlinePencilAlt />} text={"Заявки"} />
        <NavbarLink href={"/finace"} icon={<FaHandHoldingDollar />} text={"Финансы"} />
        <NavbarLink href={"/groups"} icon={<MdOutlineGroups />} text={"Группа"} />
        <NavbarLink href={"/report"} icon={<TbReport />} text={"Отчет"} />
        <NavbarLink href={"/teachers"} icon={<FaChalkboardTeacher />} text={"Учителя"} />
        <NavbarLink href={"/students"} icon={<PiStudentFill />} text={"Студенты"} />
      </ul>
      
    
    </div>
  );
}
