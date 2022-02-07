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

        <div class="part">
          <i class="icon fa fa-bolt fa-2x"></i>
          <h4 class="part-title">Mobile Ux</h4>
          <hr class="line" />
          <p class="part-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            quos omnis voluptas ea ipsam! Voluptas.
          </p>
        </div>

        <div class="part last">
          <i class="icon fa fa-tachometer fa-2x"></i>
          <h4 class="part-title">Mobile Ux</h4>
          <hr class="line" />
          <p class="part-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            quos omnis voluptas ea ipsam! Voluptas.
          </p>
        </div>
      </div>
    </WorkPart>
  );
}

export default Works;
