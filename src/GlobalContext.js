import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  _transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function deleteTransaction(id) {
    console.log(id);
    dispatch({
      type: "DELETE_TRANS",
      payload: id,
    });
    console.log(state._transactions);
  }

  function addTrans(data) {
    console.log(data);
    dispatch({
      type: "ADD_TRANS",
      payload: data,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state._transactions,
        deleteTransaction,
        addTrans,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
