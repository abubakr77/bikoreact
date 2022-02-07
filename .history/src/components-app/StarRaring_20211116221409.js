import React, { Component } from "react";
import Star from "../components/Star";

export default class StarRaring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startSelected: 0,
    };
    this.change = this.change.bind(this);
  }
  change(ss) {
    this.setState({ startSelected: ss });
  }
  render() {
    const { totalStart } = this.props;
    const { startSelected } = this.state;
    return (
      <div className="start-rating">
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => this.change(i + 1)}
          />
        ))}
        <p>
          {starsSelected} of {totalStars} stars
        </p>
      </div>
    );
  }
}
