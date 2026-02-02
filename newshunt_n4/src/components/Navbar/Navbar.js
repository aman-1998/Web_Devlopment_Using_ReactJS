import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const colorPalettes = [
    { name: "red", color: "#dc3545" },
    { name: "yellow", color: "#ffc107" },
    { name: "blue", color: "#0d6efd" },
    { name: "green", color: "#198754" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/favicon.svg`}
            alt="News Hunt"
            height="35"
            className="me-2"
          />
          <span>{props.appName}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/business">
                    Business
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/general">
                    General
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/health">
                    Health
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/science">
                    Science
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/sports">
                    Sports
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          <div className="d-flex mx-2">
            {colorPalettes.map((palette) => (
              <div
                key={palette.name}
                className="rounded mx-1 palette-box"
                style={{ backgroundColor: palette.color }}
                title={palette.name}
                onClick={() => props.changeColor(palette.color)}
              />
            ))}
          </div>
          <div
            className={`mx-2 my-2 form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              onClick={props.toggleMode}
              id="checkNativeSwitch"
              role="switch"
            />
            <label className="form-check-label" htmlFor="checkNativeSwitch">
              {props.mode === "light" ? "Dark Mode" : "Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  appName: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
