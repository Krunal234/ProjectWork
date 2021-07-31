import React from "react";
import "./GoToHome.css";
const GoToHome = (props) => {
  const screenHandler = () => {
    props.onHome(true);
  };
  return (
    <div className="goToHome">
      <button onClick={screenHandler}>Back</button>
    </div>
  );
};

export default GoToHome;
