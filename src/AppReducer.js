export default (state, action) => {
  console.log(state._transactions);
  switch (action.type) {
    case "DELETE_TRANS":
      return {
        ...state,
        _transactions: state._transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANS":
      return {
        _transactions: [...state._transactions, action.payload],
      };
    default:
      return state;
  }
};
