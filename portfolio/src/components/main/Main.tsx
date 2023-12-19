import React from "react";
import "./main.css";

const Main = () => {
  const emoji = "\u{1F920}";
  return (
    <div className="main_container">
      <h1 className="main_header">Welcome to my page {emoji}</h1>
      <p>
        My name is <span className="name">Valentyna Babaian</span>.<br />
        I'm Quality Assurance Engineer.{" "}
      </p>
    </div>
  );
};

export default Main;
