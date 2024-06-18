import React from "react";
import useDarkModeStore from "../../Store/DarcModeStore";

export default function PaymentCard({ title, amount, description }) {
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <div
      className={`${darkMode ? "payment__card-light" : "payment__card-dark"}`}
    >
      <h3 className="payment__card-title">{title}</h3>
      <p className="payment__card-amount">{amount}</p>
      <p className="payment__card-description">{description}</p>
    </div>
  );
}
