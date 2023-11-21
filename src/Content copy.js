import React from "react";
import { useState } from "react";

const Content = () => {
  const [names, setNames] = useState("awesome");

  function handleNameChange() {
    const names = ["awesome", "better", "wonderful", "fantastic"];
    const int = Math.floor(Math.random() * 4);
    setNames(names[int]);
  }

  return (
    <content>
      <p> let's get {names} experience </p>
      <button onClick={handleNameChange}> subscribe</button>
    </content>
  );
};
export default Content;
