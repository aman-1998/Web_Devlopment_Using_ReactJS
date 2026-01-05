import React, { Component } from "react";
import "./App.css";
import News from "./components/News";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class App extends Component {
  constructor() {
    super();

    // colors
    this.blue = "#0d6efd";
    this.red = "#dc3545";
    this.yellow = "#ffc107";
    this.green = "#198754";

    this.darkBlue = "#22313dff";
    this.darkRed = "#3d2c2cff";
    this.darkYellow = "#555137ff";
    this.darkGreen = "#2c3b2cff";

    // state
    this.state = {
      mode: "light",
      color: this.blue,
    };
  }

  toggleMode = () => {
    if (this.state.mode === "light") {
      this.setState({ mode: "dark" }, this.updateBackground);
    } else {
      this.setState({ mode: "light" }, () => {
        document.body.style.backgroundColor = "white";
      });
    }
  };

  changeColor = (color) => {
    this.setState({ color }, this.updateBackground);
  };

  updateBackground = () => {
    if (this.state.mode === "dark") {
      if (this.state.color === this.blue)
        document.body.style.backgroundColor = this.darkBlue;
      else if (this.state.color === this.red)
        document.body.style.backgroundColor = this.darkRed;
      else if (this.state.color === this.yellow)
        document.body.style.backgroundColor = this.darkYellow;
      else document.body.style.backgroundColor = this.darkGreen;
    }
  };

  render() {
    return (
      <Router>
        <Navbar
          appName="News Hunt"
          aboutText="About Us"
          mode={this.state.mode}
          toggleMode={this.toggleMode}
          changeColor={this.changeColor}
        />
        <Routes>
          <Route path="/" element={<News mode={this.state.mode} color={this.state.color} />} />
          <Route
            path="/about"
            element={<About mode={this.state.mode} color={this.state.color} />}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
