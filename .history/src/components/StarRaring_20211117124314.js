import React, { Component } from "react";
import Star from "../components/Star";

export default class StarRaring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starsSelected: 0,
    };
    this.change = this.change.bind(this);
  }
  change() {
    this.setState({ starsSelected: this.state.starsSelected + 1 });
  }
  render() {
    var totalStars = 5;
    var starsSelected = this.state.starsSelected;
    return (
      <div className="start-rating">
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onclick={(i) => this.change()}
          />
        ))}
        <p>
          {starsSelected} of {totalStars} stars
        </p>
      </div>
    );
  }
}
