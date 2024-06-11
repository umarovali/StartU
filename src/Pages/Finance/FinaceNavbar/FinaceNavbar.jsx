import React from "react";
import { MdAttachMoney } from "react-icons/md";
import { PiHandWithdraw } from "react-icons/pi";
import { MdAccountBalance } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function FinaceNavbar() {
  return (
    <div className="container">
      <nav className="finace__navbar">
        <NavLink to={"/finace/all-payments"} className="finace__card">
          <MdAttachMoney className="finace__icon" /> Все платежи
        </NavLink>
        <NavLink to={"/finace/withdrawals"} className="finace__card">
          <PiHandWithdraw className="finace__icon" /> Снятие средств
        </NavLink>
        <NavLink to={"/finace/expense-accounting"} className="finace__card">
          <MdAccountBalance className="finace__icon" /> Учет Расходов
        </NavLink>
        <NavLink to={"/finace/salaries"} className="finace__card">
          <GrMoney className="finace__icon" /> Зарплаты
        </NavLink>
        <NavLink to={"/finace/debtors"} className="finace__card">
          <GiReceiveMoney className="finace__icon" /> Должники
        </NavLink>
      </nav>
    </div>
  );
}
