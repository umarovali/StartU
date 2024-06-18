import React, { useState } from "react";
import useDarkModeStore from "../../Store/DarcModeStore";

export default function ReceiptForm() {
  const [date, setDate] = useState("");
  const [checkNumber, setCheckNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [course, setCourse] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [details, setDetails] = useState("");
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <div className="paymet-wrapper">
      <div className={`${darkMode ? "paymet-form-light" : "paymet-form-dark"}`}>
        <div className="receipt-form">
          <div className="chek__title">
            <h2>Электронный чек</h2>
            <h2 className="chek__number">1</h2>
          </div>
          <div className={`${darkMode ? "payment__inputs-light" : "payment__inputs-dark"}`}>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Имя"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Фамилия"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Дата"
            />
            <input
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="Курс"
            />
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Телефонный номер"
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Сумма"
            />
            <div className="peceipt__wrapper-two">
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className={`${darkMode ? "receipt__form-select-light" : "receipt__form-select-dark"}`}
              >
                <option value="">Способ оплаты</option>
                <option value="cash">Наличными</option>
                <option value="card">Картой</option>
              </select>

              <button className={`${darkMode ? "payment__btn-light" : "payment__btn-dark"}`}>Chek</button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${darkMode ? "paymet-paid-light" : "paymet-paid-dark"}`}
      ></div>
    </div>
  );
}
