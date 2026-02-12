import React, { Component } from "react";

export class SpinnerLoading extends Component {
  render() {
    return (
      <div className="my-3 text-center">
        <img
          src={`${process.env.PUBLIC_URL}/circle_loading.gif`}
          alt="Loading..."
        />
      </div>
    );
  }
}

export default SpinnerLoading;