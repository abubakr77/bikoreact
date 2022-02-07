import React from "react";
import {
  WorkPart,
  WorkSec,
  WorkSpan,
  WorkTitle,
  PartDesc,
  PartTitle,
  Line,
  First,
} from "./style";

function Works() {
  return (
    <WorkPart>
      <div className="container">
        <WorkTitle>
          <WorkSpan>My</WorkSpan> Work
        </WorkTitle>
        <First>
          <i className="icon fa fa-chain fa-2x"></i>
          <PartTitle>Mobile Ux</PartTitle>
          <Line />
          <PartDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            quos omnis voluptas ea ipsam! Voluptas.
          </PartDesc>
        </First>

        <WorkPart>
          <i className="icon fa fa-bolt fa-2x"></i>
          <PartTitle>Mobile Ux</PartTitle>
          <Line />
          <PartDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            quos omnis voluptas ea ipsam! Voluptas.
          </PartDesc>
        </WorkPart>

        <First>
          <i className="icon fa fa-tachometer fa-2x"></i>
          <PartTitle>Mobile Ux</PartTitle>
          <Line />
          <PartDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            quos omnis voluptas ea ipsam! Voluptas.
          </PartDesc>
        </First>
      </div>
    </WorkPart>
  );
}

export default Works;
