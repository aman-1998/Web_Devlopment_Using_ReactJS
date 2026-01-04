import React, { Component } from "react";

export class NewsItem extends Component {
  truncateText(text, maxLength) {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  render() {
    let { title, description, mode, color, imgUrl, newsUrl } = this.props;

    let blue = "#0d6efd";
    let red = "#dc3545";
    let yellow = "#ffc107";
    let green = "#198754";

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

    return (
      <div className="h-100">
        <div
          className="card news-card h-100 w-100"
          style={{
            borderColor: color,
            backgroundColor: mode === "dark" ? "#343a40" : "white",
            color: mode === "dark" ? "white" : "black",
          }}
        >
          <img src={imgUrl ? imgUrl : `${process.env.PUBLIC_URL}/favicon.svg`} className="card-img-top news-img" alt="news" />

          <div className="card-body d-flex flex-column">
            <h5 className="card-title news-title">{title}</h5>

            <p className="card-text news-desc">{description}</p>

            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn mt-auto"
              style={buttonStyle}
            >
              Read
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
