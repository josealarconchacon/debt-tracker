import React, { useState } from "react";
import "./add-card-form.styles.scss";
function AddCardForm({ onAddCard }) {
  const [newCard, setNewCard] = useState({
    name: "",
    balance: "",
    paymentDate: "",
    minimumPayment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newCard.name &&
      newCard.balance &&
      newCard.paymentDate &&
      newCard.minimumPayment
    ) {
      onAddCard({ ...newCard, id: Date.now() });
      setNewCard({
        name: "",
        balance: "",
        paymentDate: "",
        minimumPayment: "",
      });
    }
  };

  return (
    <div className="mb-6 p-4 border rounded add-card-form">
      <h2 className="text-xl font-bold mb-4">Add New Card</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input
          className="border p-2 rounded"
          placeholder="Card name"
          value={newCard.name}
          onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Balance on card"
          value={newCard.balance}
          onChange={(e) => setNewCard({ ...newCard, balance: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          type="date"
          placeholder="Payment date"
          value={newCard.paymentDate}
          onChange={(e) =>
            setNewCard({ ...newCard, paymentDate: e.target.value })
          }
        />
        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Minimum payment per month"
          value={newCard.minimumPayment}
          onChange={(e) =>
            setNewCard({ ...newCard, minimumPayment: e.target.value })
          }
        />
        <button
          type="submit"
          className="col-span-2 bg-blue-500 text-white p-2 rounded"
        >
          Add Card
        </button>
      </form>
    </div>
  );
}

export default AddCardForm;
