import React, { useState } from "react";
import IncomeInput from "./IncomeInput";
import TotalExpenses from "./TotalExpenses";
import AvailableBalance from "./AvailableBalance";

const ExpenseTracker = () => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const handleAddIncome = (incomeAmount) => {
    setIncomes([...incomes, incomeAmount]);
  };

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <IncomeInput onAddIncome={handleAddIncome} />
      <TotalExpenses expenses={expenses} />
      <h3>Cumulative Expenses</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.option}: ₵{expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <AvailableBalance incomes={incomes} expenses={expenses} />
    </div>
  );
};

export default ExpenseTracker;
