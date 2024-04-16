import React from "react";

const TotalExpenses = ({ expenses }) => {
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div>
      <h3>Total Expenses</h3>
      <p>Total: ₵{totalExpenses.toFixed(2)}</p>
    </div>
  );
};

export default TotalExpenses;
