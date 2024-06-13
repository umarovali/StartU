import React from "react";
import PaymentCard from "./PaymentCard";
import ReceiptForm from "./PaymentForm";

export default function Payment() {
  return (
    <section>
      <div className="container">
        <div className="payment__wrapper">
          <div className="payment__left">
            <PaymentCard
              title="Общая сумма оплаты"
              amount="10,000 ⃀"
              description="Общая сумма всех оплат за текущий месяц."
            />
            <PaymentCard
              title="Оплата наличными"
              amount="4,000 ⃀"
              description="Сумма всех наличных оплат."
            />
            <PaymentCard
              title="Оплата картой"
              amount="6,000 ⃀"
              description="Сумма всех оплат картой."
            />
          </div>
          <div className="payment__right">
            <ReceiptForm />
          </div>
        </div>
      </div>
    </section>
  );
}
