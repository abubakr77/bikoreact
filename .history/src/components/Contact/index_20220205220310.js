import React from "react";
import Footer from "../Footer";
import { DForm, DInput, DSpan, DTitle } from "./style.js";

function Contact() {
  return (
    <React.Fragment>
      <div className="drop">
        <div className="container">
          <h2 className="drop-title">
            <span>Drop </span>Me A line
          </h2>
          <form action="">
            <div className="form-input">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <input type="text" class="sub" placeholder="Your Subject" />
            <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
