import { useState, useRef } from "react";
import "./App.css";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
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
      <Navbar
        appName="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} clearAlert={clearAlert} />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
