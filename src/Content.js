import { Button } from "@mui/material";
import React from "react";

const Content = () => {
  function handleNameChange() {
    const names = ["awesome", "better", "wonderful", "fantastic"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  }

  const handleClick = () => {
    alert("thanks for the support");
  };
  return (
    <content>
      <p> let's get {handleNameChange()} experience </p>
      <button onClick={() => handleClick()}> subscribe</button>
    </content>
  );
};

export default Content;
