import React, { useState } from "react";
import "./ExpenseTracker2.css";

const ExpenseTracker2 = () => {
  const [currentExpense, setCurrentExpense] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0); // New state for total expense

  const options = ["Food", "Rent", "Transportation", "Entertainment"];

  const handleAddExpense = () => {
    let expenseToAdd = currentExpense;

    if (currentExpense === "Other") {
      if (!selectedOption || !amount) {
        alert("Please enter a new option and amount.");
        return;
      }
      expenseToAdd = selectedOption;
    } else {
      if (!currentExpense || !amount) {
        alert("Please select an option and enter an amount.");
        return;
      }
    }

    const newExpense = { option: expenseToAdd, amount: parseFloat(amount) };
    setExpenses([...expenses, newExpense]);

    // Update total expense
    const newTotalExpense = totalExpense + parseFloat(amount);
    setTotalExpense(newTotalExpense);

    setCurrentExpense("");
    setSelectedOption("");
    setAmount("");
  };

  return (
    <div className="expense-tracker-container">
      <h2 className="header">Expense Tracker</h2>
      <p className="date">Current Date: {new Date().toDateString()}</p>

      <div className="input-container">
        <select
          className="select-option"
          value={currentExpense}
          onChange={(e) => setCurrentExpense(e.target.value)}
        >
          <option value="">Select an option...</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
          <option value="Other">Other (Specify)</option>
        </select>
        {currentExpense === "Other" && (
          <input
            type="text"
            className="other-option"
            placeholder="Enter new option"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
        )}

        <input
          type="number"
          className="amount-input"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="add-button" onClick={handleAddExpense}>
          Add Expense
        </button>
      </div>

      <div className="expenses-container">
        <h3 className="expenses-header">Cumulative Expenses</h3>
        <ul className="expenses-list">
          {expenses.map((expense, index) => (
            <li key={index} className="expense-item">
              {expense.option}: <span className="currency">GH₵</span>
              {expense.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      <div className="total-container">
        <h3 className="total-header">Total Expense</h3>
        <p className="total-amount">
          <span className="currency">GH₵</span>
          {totalExpense.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ExpenseTracker2;
