import React, { useState } from "react";
import "./card-item.styles.scss";
function CardItem({ card, onPayment }) {
  const [paymentAmount, setPaymentAmount] = useState("");

  const handlePayment = () => {
    if (paymentAmount && parseFloat(paymentAmount) > 0) {
      onPayment(card.id, parseFloat(paymentAmount));
      setPaymentAmount("");
    }
  };

  return (
    <div className="card-item mb-4 p-4 border rounded">
      <h3 className="font-bold">{card.name}</h3>
      <p>Balance: ${parseFloat(card.balance).toFixed(2)}</p>
      <p>Payment Date: {card.paymentDate}</p>
      <p>Minimum Payment: ${parseFloat(card.minimumPayment).toFixed(2)}</p>
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
    </div>
  );
}

export default CardItem;
