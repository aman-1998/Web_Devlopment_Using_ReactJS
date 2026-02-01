import React, { Component } from "react";
import "./App.css";
import News from "./components/News";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

export class App extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

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
          <Route exact
            path="/"
            element={
              <News
                key="general"
                mode={this.state.mode}
                color={this.state.color}
                apiKey={"988bbb75c65049a6a61c1cb4a9808280"}
                country={"us"}
                category={"general"}
                pageSize={6}
              />
            }
          />
          <Route exact
            path="/business"
            element={
              <News
                key="business"
                mode={this.state.mode}
                color={this.state.color}
                apiKey={"988bbb75c65049a6a61c1cb4a9808280"}
                country={"us"}
                category={"business"}
                pageSize={6}
              />
            }
          />
          <Route exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                mode={this.state.mode}
                color={this.state.color}
                apiKey={"988bbb75c65049a6a61c1cb4a9808280"}
                country={"us"}
                category={"entertainment"}
                pageSize={6}
              />
            }
          />
          <Route exact
            path="/general"
            element={
              <News
                key="general"
                mode={this.state.mode}
                color={this.state.color}
                apiKey={"988bbb75c65049a6a61c1cb4a9808280"}
                country={"us"}
                category={"general"}
                pageSize={6}
              />
            }
          />
          <Route exact
            path="/health"
            element={
              <News
                key="health"
                mode={this.state.mode}
                color={this.state.color}
                apiKey={"988bbb75c65049a6a61c1cb4a9808280"}
                country={"us"}
                category={"health"}
                pageSize={6}
              />
            }
          />
          <Route exact
            path="/science"
            element={
              <News
                key="science"
                mode={this.state.mode}
                color={this.state.color}
                apiKey={"988bbb75c65049a6a61c1cb4a9808280"}
                country={"us"}
                category={"science"}
                pageSize={6}
              />
            }
          />
          <Route exact
            path="/sports"
            element={
              <News
                key="sports"
                mode={this.state.mode}
                color={this.state.color}
                apiKey={"988bbb75c65049a6a61c1cb4a9808280"}
                country={"us"}
                category={"sports"}
                pageSize={6}
              />
            }
          />
          <Route exact
            path="/technology"
            element={
              <News
                key="technology"
                mode={this.state.mode}
                color={this.state.color}
                apiKey={"988bbb75c65049a6a61c1cb4a9808280"}
                country={"us"}
                category={"technology"}
                pageSize={6}
              />
            }
          />
          <Route exact
            path="/about"
            element={<About mode={this.state.mode} color={this.state.color} />}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
