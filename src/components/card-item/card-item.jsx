import React, { useState } from "react";
import "./card-item.styles.scss";

function CardItem({ card, onPayment, onRemove }) {
  const [paymentAmount, setPaymentAmount] = useState("");

  const handlePayment = () => {
    if (paymentAmount && parseFloat(paymentAmount) > 0) {
      onPayment(card.id, parseFloat(paymentAmount));
      if (parseFloat(card.balance) <= parseFloat(paymentAmount)) {
        card.isPaidOff = true;
      }
      setPaymentAmount("");
    }
  };

  const handleRemove = () => {
    onRemove(card.id);
  };

  return (
    <div
      className={`card-item mb-4 p-4 border rounded ${
        card.isPaidOff ? "paid-off" : ""
      }`}
    >
      <div className="card-header flex justify-between items-center">
        <h3 className="font-bold">{card.name}</h3>
        <button className="remove-icon" onClick={handleRemove}>
          ✖
        </button>
      </div>
      <p>Balance: ${parseFloat(card.balance).toFixed(2)}</p>
      <p>Payment Date: {card.paymentDate}</p>
      <p>Minimum Payment: ${parseFloat(card.minimumPayment).toFixed(2)}</p>
      {!card.isPaidOff && (
        <div className="payment-input mt-2 flex">
          <input
            type="number"
            placeholder="Payment Amount"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
            className="border p-2 rounded mr-2"
          />
          <button
            onClick={handlePayment}
            className="bg-green-500 text-white p-2 rounded"
          >
            Make Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default CardItem;
