import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  let transArr = transactions.map((transaction) => {
    return transaction.amount;
  });
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>{transArr.reduce((total, num) => total + num, 0)}</h1>
    </div>
  );
}

export default Balance;
