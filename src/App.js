import React, { useState } from "react";
import Home from "./components/Home/Home";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import GoToHome from "./components/Home/GoToHome";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  const [isHome, setIsHome] = useState(true);
  const setHome = (data) => {
    setIsHome(data);
  };
  return (
    <div>
      {isHome ? (
        <Home onHome={setHome} />
      ) : (
        <div>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses} />
          <GoToHome onHome={setHome} />
        </div>
      )}
    </div>
  );
};

export default App;
