import React from "react";
import "./Home.css";
const Home = (props) => {
  const screenHandler = () => {
    props.onHome(false);
  };
  return (
    <div className="home">
      <button onClick={screenHandler}>Expense Tracker</button>
      <button>Accounts</button>
      <div>
        <p>This is an application to log all your daily expenses.</p>
        <p>I am building a 2nd section as showns above "Accounts" button.</p>
        <p>Its not done yet. Its Under Development</p>
      </div>
    </div>
  );
};

export default Home;
