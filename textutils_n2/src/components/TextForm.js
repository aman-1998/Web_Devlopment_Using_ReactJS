import React, { useState } from "react";

export default function TextForm({ heading = "Enter text", mode, showAlert }) {
  // function declaration
  //default prop value

  const [text, setText] = useState("");
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperOnClick = () => {
    // function expression
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerOnClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleExtraSpacesOnClick = () => {
    let newText = text.split(/\s+/).filter((word) => word !== "").join(" ");
    setText(newText);
  };

  const handleClearOnClick = () => {
    setText("");
  };

  const handleCopyOnClick = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    if (newText.value !== "") {
      showAlert("success", "Text copied to clipboard!");
    }
  };

  let darkStyle = {
    // backgroundColor: "#13466e",
    color: "white",
  };

  let lightStyle = {
    // backgroundColor: "white",
    color: "black",
  };

  return (
    <>
      <div
        className="container my-3"
        style={mode === "dark" ? darkStyle : lightStyle}
      >
        <div className="container my-3">
          <h2>{heading}</h2>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Enter any text"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="7"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpperOnClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLowerOnClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpacesOnClick}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleClearOnClick}>
            Clear
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleCopyOnClick}>
            Copy
          </button>
        </div>
        <div className="container my-3">
          <h4>Your text summary</h4>
          <p>
            {text.split(" ").filter((word) => word !== "").length} words and{" "}
            {text.length} characters
          </p>
          <p>
            {0.008 * text.split(" ").filter((word) => word !== "").length}{" "}
            Minutes read
          </p>
          <h5>Preview</h5>
          <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
      </div>
    </>
  );
}
