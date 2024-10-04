import React from "react";
import "./total-debt-display.scss";

function TotalDebtDisplay({ totalDebt }) {
  return (
    <div className="p-4 bg-yellow-100 border border-yellow-400 rounded total-debt-display">
      <p className="font-bold">Total Debt: ${totalDebt.toFixed(2)}</p>
    </div>
  );
}

export default TotalDebtDisplay;
