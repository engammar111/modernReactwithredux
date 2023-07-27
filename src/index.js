//import the raect and reactdom libs
import React from "react";
import ReactDOM from "react-dom";

const getButton = () => {
  return "ammar";
};

//create a react component
const App = () => {
  const buttonText = { text: "clickME" };
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <label style={style} className="label" htmlFor="name">
        {" "}
        {buttonText.text}
      </label>
      <input id="name" type="text"></input>
      <button style={style}> {buttonText.text}</button>
    </div>
  );
};

//take the react function and show it
ReactDOM.render(<App />, document.getElementById("root"));
