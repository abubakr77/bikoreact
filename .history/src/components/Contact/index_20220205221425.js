import React from "react";
import Footer from "../Footer";
import {Drop, DForm, DInput, DSpan, DTitle,TexArea,Submitt } from "./style.js";

function Contact() {
  return (
    <React.Fragment>
      <Drop>
        <div className="container">
          <DTitle>
            <DSpan>Drop </DSpan>Me A line
          </DTitle>
          <DForm action="">
            <DInput>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </DInput>
            <input type="text" class="sub" placeholder="Your Subject" />
            <TexArea cols="30" rows="10" placeholder="Your Message"></TexArea>
            <Submitt type="submit" value="Send Message" />
          </DForm>
        </div>
      </Drop>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
