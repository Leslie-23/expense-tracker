import React, { useState } from "react";

const IncomeInput = ({ onAddIncome }) => {
  const [income, setIncome] = useState("");

  const handleAddIncome = () => {
    if (!income) {
      alert("Please enter an income amount.");
      return;
    }
    onAddIncome(parseFloat(income));
    setIncome("");
  };

  return (
    <div>
      <h3>Add Income</h3>
      <input
        type="number"
        placeholder="Enter income amount"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <button onClick={handleAddIncome}>Add Income</button>
    </div>
  );
};

export default IncomeInput;
