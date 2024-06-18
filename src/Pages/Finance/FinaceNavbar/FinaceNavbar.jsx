import React from "react";
import { MdAttachMoney } from "react-icons/md";
import { PiHandWithdraw } from "react-icons/pi";
import { MdAccountBalance } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import useDarkModeStore from "../../../Store/DarcModeStore";

export default function FinaceNavbar() {
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <div className="container">
      <nav className="finace__navbar">
        <NavLink to={"/finace/all-payments"} className={`${darkMode ? "finace__card-light" : "finace__card-dark"}`}>
          <MdAttachMoney className="finace__icon" /> Все платежи
        </NavLink>
        <NavLink to={"/finace/withdrawals"} className={`${darkMode ? "finace__card-light" : "finace__card-dark"}`}>
          <PiHandWithdraw className="finace__icon" /> Снятие средств
        </NavLink>
        <NavLink to={"/finace/expense-accounting"} className={`${darkMode ? "finace__card-light" : "finace__card-dark"}`}>
          <MdAccountBalance className="finace__icon" /> Учет Расходов
        </NavLink>
        <NavLink to={"/finace/salaries"} className={`${darkMode ? "finace__card-light" : "finace__card-dark"}`}>
          <GrMoney className="finace__icon" /> Зарплаты
        </NavLink>
        <NavLink to={"/finace/debtors"} className={`${darkMode ? "finace__card-light" : "finace__card-dark"}`}>
          <GiReceiveMoney className="finace__icon" /> Должники
        </NavLink>
      </nav>
    </div>
  );
}
