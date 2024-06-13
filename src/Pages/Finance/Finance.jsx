import React from "react";
import FinaceNavbar from "./FinaceNavbar/FinaceNavbar";
import { Route, Routes } from "react-router-dom";
import AllPayments from "./FinacePages/AllPayments/AllPayments";
import Debtors from "./FinacePages/Debtors/Debtors";
import ExpenseAccounting from "./FinacePages/ExpenseAccounting/ExpenseAccounting";
import Salaries from "./FinacePages/Salaries/Salaries";
import Withdrawals from "./FinacePages/Withdrawals/Withdrawals";

export default function Finance() {
  return (
    <section>
      <FinaceNavbar />

      <Routes>
        <Route path="/all-payments" element={<AllPayments />} />
        <Route path="/withdrawals" element={<Debtors />} />
        <Route path="/expense-accounting" element={<ExpenseAccounting />} />
        <Route path="/salaries" element={<Salaries />} />
        <Route path="/debtors" element={<Withdrawals />} />
      </Routes>
    </section>
  );
}
