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
    const { works } = this.state;
    const worklist = works.map((workitem) => {
      return (
        <WorkPart first={workitem.id} key={workitem.id}>
          <i className={workitem.icon_name}></i>
          <PartTitle>{workitem.title}</PartTitle>
          <Line />
          <PartDesc>{workitem.body}</PartDesc>
        </WorkPart>
      );
    });
    return (
      <WorkSec>
        <div className="container">
          <WorkTitle>
            <WorkSpan>My</WorkSpan> Work
          </WorkTitle>
          {worklist}
        </div>
      </WorkSec>
    );
  }
}

export default Works;
