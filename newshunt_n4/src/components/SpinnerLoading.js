import React, { Component } from "react";

export class SpinnerLoading extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={`${process.env.PUBLIC_URL}/ios_loading.gif`}
          alt="Loading..."
        />
      </div>
    );
  }
}

export default SpinnerLoading;