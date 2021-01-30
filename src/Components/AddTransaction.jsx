import React, { useState, useContext } from "react";
import { GlobalContext } from "../GlobalContext";
function AddTransaction() {
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");

  const { addTrans } = useContext(GlobalContext);

  const addTransaction = (e) => {
    e.preventDefault();
    console.log(Math.floor(Math.random() * 10000 + 1));
    console.log(typeof amount);
    let data = {
      id: Math.floor(Math.random() * 10 + 1),
      text: reason,
      amount: parseInt(amount),
    };
    addTrans(data);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={addTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={reason}
            placeholder="Enter text..."
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
