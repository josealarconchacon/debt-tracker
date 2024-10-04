import React, { useState, useEffect } from "react";
import AddCardForm from "../add-card-form/add-card-form";
import CardList from "../card-list/card-list";
import DebtProgressChart from "../debt-progress-chart/debt-progress-chart";
import TotalDebtDisplay from "../total-debt-display/total-debt-display";

import "../add-card-form/add-card-form.styles.scss";
import "../card-list/card-list.styles.scss";
import "../debt-progress-chart/debt-progress-chart.styles.scss";
import "../total-debt-display/total-debt-display.scss";

function DebtTrackerDashboard() {
  const [cards, setCards] = useState([]);
  const [payments, setPayments] = useState([]);
  const [totalDebt, setTotalDebt] = useState(0);

  useEffect(() => {
    const newTotalDebt = cards.reduce(
      (sum, card) => sum + parseFloat(card.balance),
      0
    );
    setTotalDebt(newTotalDebt);
  }, [cards]);

  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const handlePayment = (cardId, amount) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        const newBalance = Math.max(0, parseFloat(card.balance) - amount);
        return { ...card, balance: newBalance.toFixed(2) };
      }
      return card;
    });
    setCards(updatedCards);
    setPayments([
      ...payments,
      { cardId, amount, date: new Date().toISOString().split("T")[0] },
    ]);
  };

  const getProgressData = () => {
    const data = [];
    let runningTotal = totalDebt;
    payments.forEach((payment) => {
      runningTotal -= parseFloat(payment.amount);
      data.push({
        date: payment.date,
        debt: runningTotal,
      });
    });
    return data;
  };

  return (
    <div className="p-4 max-w-4xl mx-auto debt-tracker-dashboard">
      <h1 className="text-3xl font-bold mb-6">Debt Tracker Dashboard</h1>
      <AddCardForm onAddCard={handleAddCard} />
      <CardList cards={cards} onPayment={handlePayment} />
      <DebtProgressChart progressData={getProgressData()} />
      <TotalDebtDisplay totalDebt={totalDebt} />
    </div>
  );
}

export default DebtTrackerDashboard;
