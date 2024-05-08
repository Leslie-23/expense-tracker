import React, { useState } from "react";
import jsPDF from "jspdf";
import "./ExpenseTracker2.css";

const ExpenseTracker2 = () => {
  const [currentExpense, setCurrentExpense] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [showReport, setShowReport] = useState(false);

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
  const displayInfo = () => {
    alert(
      "For expenses input the amount with a preceding '-' sign \nFor incomes just input the actual amount"
    );
  };
  window.onload = function () {
    displayInfo();
  };

  const printReport = () => {
    // Generate report text
    let reportText = `Expense Report:\nOn ${new Date().toDateString()}\n`;{/* `As at ${new Date().toLocaleTimeString()}\n` */} //might wanna add a time functioanlitty 
    expenses.forEach((expense, index) => {
      reportText += `${index + 1}. ${
        expense.option
      }: GH₵${expense.amount.toFixed(2)}\n`;
    });
    reportText += `Total Expense: GH₵${totalExpense.toFixed(2)}`;

    // Print report on the open window
    alert(reportText);

    //print report to pdf
    const doc = new jsPDF();
    let userInputSelect = prompt(
      "Do you wish to download the report in pdf format: \nyes(y) or no(n)\n---"
    );
    if (userInputSelect == "y" || userInputSelect == "yes") {
      doc.text(reportText, 10, 10);
      doc.save("TransactionReport.pdf");
    } else if (userInputSelect == "n" || userInputSelect == "no") {
      setTimeout(() => {
        alert("Continue with your actions...");
      }, 300);
    }
  };

  return (
    <div className="expense-tracker-container">
      <h2 className="header">
        Income Tracker{" "}
        <button class="infoAside" onClick={displayInfo}>
          {" "}
          i{" "}
        </button>
      </h2>

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
          Add
        </button>
      </div>

      <div className="expenses-container">
        <h3 className="expenses-header">Cumulative Transactions</h3>
        <ul className="expenses-list">
          {expenses.map((expense, index) => (
            <li key={index} className="expense-item">
              {expense.option}: <span className="currency">GH₵</span>
              {expense.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      {/*  <button className="add-button" onClick={() => setShowReport(!showReport)}>
        {showReport ? "Hide Report" : "Show Report"}
      </button> */}

      <div className="report-container">
        <button
          className="add-button"
          onClick={(setShowReport) => printReport()}
        >
          Print Report
        </button>
      </div>

      <div className="total-container">
        <h3 className="total-header">Balance.</h3>
        <p className="total-amount">
          <span className="currency">GH₵</span>
          {totalExpense.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ExpenseTracker2;
