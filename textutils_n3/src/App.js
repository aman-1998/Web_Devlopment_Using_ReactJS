import { useState, useRef } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let blue = "#0d6efd";
  let red = "#dc3545";
  let yellow = "#ffc107";
  let green = "#198754";

  let darkBlue = "#22313dff";
  let darkRed = "#3d2c2cff";
  let darkYellow = "#555137ff";
  let darkGreen = "#2c3b2cff";

  const [mode, setMode] = useState("light"); // default mode is light
  const [color, setColor] = useState(blue); // default color is blue

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      if (color === blue) {
        document.body.style.backgroundColor = darkBlue;
      } else if (color === red) {
        document.body.style.backgroundColor = darkRed;
      } else if (color === yellow) {
        document.body.style.backgroundColor = darkYellow;
      } else {
        document.body.style.backgroundColor = darkGreen;
      }
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const changeColor = (color) => {
    setColor(color);
    if (mode === "dark") {
      if (color === blue) {
        document.body.style.backgroundColor = darkBlue;
      } else if (color === red) {
        document.body.style.backgroundColor = darkRed;
      } else if (color === yellow) {
        document.body.style.backgroundColor = darkYellow;
      } else {
        document.body.style.backgroundColor = darkGreen;
      }
    }
  };

  const [alert, setAlert] = useState(null);

  const alertTimeoutRef = useRef(null);

  const showAlert = (type, msg) => {
    if (alertTimeoutRef.current) {
      clearTimeout(alertTimeoutRef.current);
    }

    setAlert({
      type: type,
      message: msg,
    });
    alertTimeoutRef.current = setTimeout(() => {
      setAlert(null);
    }, 6000);
  };

  const clearAlert = () => {
    setAlert(null);

    // Clear timeout when alert is manually closed
    if (alertTimeoutRef.current) {
      clearTimeout(alertTimeoutRef.current);
      alertTimeoutRef.current = null;
    }
  };

  return (
    <>
      <Router>
        <Navbar
          appName="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
          color={color}
          changeColor={changeColor}
        />
        <div style={{ height: "40px" }}>
          <Alert alert={alert} clearAlert={clearAlert} />
        </div>
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Try TextUtils - Enter text here"
                  mode={mode}
                  color={color}
                  showAlert={showAlert}
                />
              }
            />
            <Route
              exact
              path="/about"
              element={<About mode={mode} color={color} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
