import React from "react";
import "./total-debt-display.scss";

function TotalDebtDisplay({ totalDebt }) {
  return (
    <div className="total-debt-display">
      <p className="font-bold">Total Debt: ${totalDebt.toFixed(2)}</p>
    </div>
  );
}

export default TotalDebtDisplay;
