import React from "react";
import { WorkPart, Work } from "./style";

function Works() {
  return (
    <div class="work">
      <div class="container">
        <h2 class="work-title">
          <span>My</span> Work
        </h2>
        <div class="part first">
          <i class="icon fa fa-chain fa-2x"></i>
          <h4 class="part-title">Mobile Ux</h4>
          <hr class="line" />
          <p class="part-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            quos omnis voluptas ea ipsam! Voluptas.
          </p>
        </div>

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
    </div>
  );
}

export default Works;
