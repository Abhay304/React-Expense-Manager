import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  let transArr = transactions.map((transaction) => {
    return transaction.amount;
  });
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          +$
          {transArr
            .filter((amount) => amount > 0)
            .reduce((total, amount) => total + amount, 0)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          -$
          {transArr
            .filter((amount) => amount < 0)
            .reduce((total, amount) => total + amount, 0)}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
