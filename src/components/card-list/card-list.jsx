import React from "react";
import CardItem from "../card-item/card-item";
import "./card-list.styles.scss";

function CardList({ cards, onPayment }) {
  return (
    <div className="mb-6 p-4 border rounded card-list">
      <h2 className="text-xl font-bold mb-4">Your Cards</h2>
      <div className="card-grid">
        {cards.map((card) => (
          <CardItem key={card.id} card={card} onPayment={onPayment} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
