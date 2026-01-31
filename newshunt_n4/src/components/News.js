import React, { Component } from "react";
import NewsItem from "./NewsItem";
import SpinnerLoading from "./SpinnerLoading";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  totalNumberOfPages = 0;

  async componentDidMount() {
    this.fetchNews(this.state.page);
  }

  fetchNews = async (page) => {
    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.props.apiKey}&page=${page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.totalNumberOfPages = Math.ceil(
      parsedData.totalResults / this.props.pageSize
    );

    this.setState({
      articles: parsedData.articles,
      page: page,
      loading: false,
    });
  };

  handleNextButton = () => {
    if (this.state.page < this.totalNumberOfPages) {
      this.fetchNews(this.state.page + 1);
    }
  };

  handlePreviousButton = () => {
    if (this.state.page > 1) {
      this.fetchNews(this.state.page - 1);
    }
  };

  handleCustomPage = (page) => {
    if (page !== this.state.page) {
      this.fetchNews(page);
    }
  };

  getPageNumbers = () => {
    const totalPages = this.totalNumberOfPages;
    const currentPage = this.state.page;

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
    const endPage = Math.min(startPage + 4, totalPages);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  render() {
    let { mode, color } = this.props;

    let PaginationbuttonStyle = {
      backgroundColor: color,
      color: color === "#ffc107" ? "black" : "white",
      borderColor: color,
    };

    let disabledStyle = {
      color: "#555555",
      backgroundColor: "#e2e2e2",
    };

    return (
      <div className="container my-4">
        <h2
          className="mb-4"
          style={{ color: mode === "dark" ? "white" : "black" }}
        >
          Top Headlines
        </h2>
        {this.state.loading && <SpinnerLoading/>}
        <div className="row g-4">
          {!this.state.loading && this.state.articles.map((element) => (
            <div className="col-md-4 d-flex" key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                mode={mode}
                color={color}
                imgUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>

        <hr />

        {/* Pagination */}
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center my-4">

            {/* Previous */}
            <li className="page-item">
              <button
                className="page-link"
                disabled={this.state.page <= 1}
                onClick={this.handlePreviousButton}
                style={
                  this.state.page <= 1 ? disabledStyle : { color: "black" }
                }
              >
                &laquo; Previous
              </button>
            </li>

            {/* Page Numbers */}
            {this.getPageNumbers().map((pageNumber) => (
              <li
                key={pageNumber}
                className={`page-item ${
                  this.state.page === pageNumber ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => this.handleCustomPage(pageNumber)}
                  style={
                    this.state.page === pageNumber
                      ? PaginationbuttonStyle
                      : { color: "black" }
                  }
                >
                  {pageNumber}
                </button>
              </li>
            ))}

            {/* Next */}
            <li className="page-item">
              <button
                className="page-link"
                disabled={this.state.page >= this.totalNumberOfPages}
                onClick={this.handleNextButton}
                style={
                  this.state.page >= this.totalNumberOfPages
                    ? disabledStyle
                    : { color: "black" }
                }
              >
                Next &raquo;
              </button>
            </li>

          </ul>
        </nav>
      </div>
    );
  }
}

export default News;
