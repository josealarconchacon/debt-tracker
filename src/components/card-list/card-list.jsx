import React from "react";
import CardItem from "../card-item/card-item";
import "./card-list.styles.scss";

const CardList = ({ cards, onPayment, setCards, setPayments, onRemove }) => {
  return (
    <div className="card-list">
      <h2>Cards</h2>
      <div className="card-grid">
        {cards.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            onPayment={onPayment}
            setCards={setCards}
            setPayments={setPayments}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
