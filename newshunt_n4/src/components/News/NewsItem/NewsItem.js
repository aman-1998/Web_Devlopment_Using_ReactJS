import React, { Component } from "react";

export class NewsItem extends Component {
  truncateText(text, maxLength) {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  render() {
    let {
      title,
      description,
      mode,
      color,
      imgUrl,
      newsUrl,
      author,
      date,
      source,
    } = this.props;

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
    
    let badgeStyle;
    if (color === yellow) {
      badgeStyle = {
        backgroundColor: yellow,
        color: "black",
      };
    } else {
      badgeStyle = {
        backgroundColor: color,
        color: "white",
      };
    }

    /*
    let badgeStyle = {
      backgroundColor: "black",
      color: "white",
      //opacity: 0.8,
      border : "1px solid white",
    };
    */

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
          <div className="position-relative">
            <img
              src={imgUrl ? imgUrl : `${process.env.PUBLIC_URL}/favicon.svg`}
              className="card-img-top news-img"
              alt="news"
            />
            {source ? (
              <span
                className={`badge rounded-pill position-absolute top-0 end-0 m-2 news-source-badge ${
                  mode === "dark" ? "news-source-badge--dark" : ""
                }`}
                style={badgeStyle}
                title={source}
              >
                {source}
              </span>
            ) : null}
          </div>

          <div className="card-body d-flex flex-column">
            <h5 className="card-title news-title">{title}</h5>

            <p className="card-text news-desc">{description}</p>

            <p className="card-text">
              <small className="text-body-secondary">
                By {author} on {date}
              </small>
            </p>

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
