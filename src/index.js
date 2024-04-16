import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ExpenseTracker from "./ExpenseTracker";
/* import ExpenseTracker2 from "./ExpenseTracker-v2"; */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <ExpenseTracker />
    {/* <ExpenseTracker2 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
