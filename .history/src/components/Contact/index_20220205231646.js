import React from "react";
import Footer from "../Footer";
import {
  Drop,
  DForm,
  DInput,
  DSpan,
  DTitle,
  TexArea,
  Submitt,
  Expo,
  InputEmail,
  InputText,
  FormInput,
} from "./style.js";

function Contact() {
  return (
    <React.Fragment>
      <Drop>
        <div className="container">
          <DTitle>
            <DSpan>Drop </DSpan>Me A line
          </DTitle>
          <DForm action="">
            <FormInput>
              <InputText type="text" placeholder="Your Name" />
              <InputEmail type="email" placeholder="Your Email" />
            </FormInput>
            <Expo type="text" placeholder="Your Subject" />
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
