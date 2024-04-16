import React from "react";

const AvailableBalance = ({ incomes, expenses }) => {
  const totalIncomes = incomes.reduce((total, income) => total + income, 0);
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const availableBalance = totalIncomes - totalExpenses;

  return (
    <div>
      <h3>Available Balance</h3>
      <p>Income: ₵{totalIncomes.toFixed(2)}</p>
      <p>Expenses: ₵{totalExpenses.toFixed(2)}</p>
      <p>Available: ₵{availableBalance.toFixed(2)}</p>
    </div>
  );
};

export default AvailableBalance;
