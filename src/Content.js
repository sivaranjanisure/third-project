import React, { useState } from "react";

const Content = () => {
  const [names, setNames] = useState("awesome");

  function handleNameChange() {
    const name = ["awesome", "better", "wonderful", "fantastic"];
    const int = Math.floor(Math.random() * 4);
    setNames(name[int]);
  }

  const handleClick = () => {
    alert("thanks for the support");
  };
  return (
    <content>
      <p>let's get {names} experience</p>

      <div class="one">
        <button className="button1" onClick={() => handleClick()}>
          {" "}
          subscribe
        </button>
        <br></br>
        <button className="button2" onClick={() => handleNameChange()}>
          {" "}
          click
        </button>
      </div>
    </content>
  );
};

export default Content;
