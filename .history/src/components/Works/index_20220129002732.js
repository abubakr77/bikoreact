import React, { Component } from "react";
import axios from "axios";
import {
  WorkPart,
  WorkSec,
  WorkSpan,
  WorkTitle,
  PartDesc,
  PartTitle,
  Line,
  First,
  Last,
} from "./style";

class Works extends Component {
  state = {
    works: [],
  };
  componentDidMount() {
    axios
      .get("js/data.json")
      .then((res) => this.setState({ works: res.data.Works }));
  }
  render() {
    return (
      <WorkSec>
        <div className="container">
          <WorkTitle>
            <WorkSpan>My</WorkSpan> Work
          </WorkTitle>
          <First>
            <i className="icon fa fa-chain fa-2x"></i>
            <PartTitle>Mobile Ux</PartTitle>
            <Line />
            <PartDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus quos omnis voluptas ea ipsam! Voluptas.
            </PartDesc>
          </First>

          <WorkPart>
            <i className="icon fa fa-bolt fa-2x"></i>
            <PartTitle>Mobile Ux</PartTitle>
            <Line />
            <PartDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus quos omnis voluptas ea ipsam! Voluptas.
            </PartDesc>
          </WorkPart>

          <Last>
            <i className="icon fa fa-tachometer fa-2x"></i>
            <PartTitle>Mobile Ux</PartTitle>
            <Line />
            <PartDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus quos omnis voluptas ea ipsam! Voluptas.
            </PartDesc>
          </Last>
        </div>
      </WorkSec>
    );
  }
}

export default Works;
