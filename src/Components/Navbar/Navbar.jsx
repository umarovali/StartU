import React from "react";
import NavbarLink from "./NavbarLink/NavbarLink";
import { MdOutlineHome } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdOutlineGroups } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import useDarkModeStore from "../../Store/DarcModeStore";
export default function Navbar() {
  const { darkMode } = useDarkModeStore();
  return (
    <div className={darkMode ? "navbar" : "navbar_dark"}>
      <div className="logo">LogoSait</div>

      <ul className="navbar_wrapper">
        <NavbarLink href={"/"} icon={<MdOutlineHome />} text={"Главный"} />
        <NavbarLink
          href={"/applications"}
          icon={<HiOutlinePencilAlt />}
          text={"Заявки"}
        />
        <NavbarLink
          href={"/finace"}
          icon={<FaHandHoldingDollar />}
          text={"Финансы"}
        />
        <NavbarLink
          href={"/groups"}
          icon={<MdOutlineGroups />}
          text={"Группа"}
        />
        <NavbarLink href={"/report"} icon={<TbReport />} text={"Отчет"} />
        <NavbarLink
          href={"/teachers"}
          icon={<FaChalkboardTeacher />}
          text={"Учителя"}
        />
        <NavbarLink
          href={"/students"}
          icon={<PiStudentFill />}
          text={"Студенты"}
        />
      </ul>
    </div>
  );
}
