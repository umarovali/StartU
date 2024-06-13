import React from "react";

export default function PaymentCard({ title, amount, description }) {
  return (
    <div className="payment__card">
      <h3 className="payment__card-title">{title}</h3>
      <p className="payment__card-amount">{amount}</p>
      <p className="payment__card-description">{description}</p>
    </div>
  );
}
