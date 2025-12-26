import React, { useState } from "react";

export default function TextForm({ heading = "Enter text" }) { // function declaration
  //default prop value

  const [text, setText] = useState("");

  const handleUpOnClick = () => { // function expression
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleDownOnClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

    const handleClearOnClick = () => {
      setText("");
    };

  return (
    <>
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
        <button className="btn btn-primary mx-2" onClick={handleUpOnClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownOnClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearOnClick}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h4>Your text summary</h4>
        <p>{text.split(" ").filter((word) => word !== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((word) => word !== "").length} Minutes read</p>
        <h5>Preview</h5>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
