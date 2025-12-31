import React, { useState } from "react";

export default function TextForm({
  heading = "Enter text",
  mode,
  color,
  showAlert,
}) {
  
  let blue = "#0d6efd";
  let red = "#dc3545";
  let yellow = "#ffc107";
  let green = "#198754";

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
    let newText = text
      .split(/\s+/)
      .filter((word) => word !== "")
      .join(" ");
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

  let buttonStyle;

  if (color === yellow) {
    buttonStyle = {
      backgroundColor: yellow,
      color: "black",
    };
  } else {
    buttonStyle = {
      backgroundColor: color,
      color: "white",
    };
  }

  let textAreaColor;

  if (color === yellow) {
    textAreaColor = {
      backgroundColor: "#fff7e0ff",
      color: "black",
    };
  } else if (color === red) {
    textAreaColor = {
      backgroundColor: "#ffeeefff",
      color: "black",
    };
  } else if (color === blue) {
    textAreaColor = {
      backgroundColor: "#f1f7ffff",
      color: "black",
    };
  } else {
    textAreaColor = {
      backgroundColor: "#ebf5ebff",
      color: "black",
    };
  }

  return (
    <>
      <div
        className="container my-3"
        style={mode === "dark" ? { color: "white" } : { color: "black" }}
      >
        <div className="container my-3">
          <h2>{heading}</h2>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Enter any text"
              style={textAreaColor}
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="7"
            ></textarea>
          </div>
          <button
            className="btn mx-2 my-2"
            style={buttonStyle}
            onClick={handleUpperOnClick}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn mx-2 my-2"
            style={buttonStyle}
            onClick={handleLowerOnClick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn mx-2 my-2"
            style={buttonStyle}
            onClick={handleExtraSpacesOnClick}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn mx-2 my-2"
            style={buttonStyle}
            onClick={handleClearOnClick}
          >
            Clear
          </button>
          <button
            className="btn mx-2 my-2"
            style={buttonStyle}
            onClick={handleCopyOnClick}
          >
            Copy
          </button>
        </div>
        <div className="container my-3">
          <h4>Your text summary</h4>
          <p>
            {text.split(/\s+/).filter((word) => word !== "").length} words and{" "}
            {text.length} characters
          </p>
          <p>
            {0.008 * text.split(/\s+/).filter((word) => word !== "").length}{" "}
            Minutes read
          </p>
          <h5>Preview</h5>
          <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
      </div>
    </>
  );
}
