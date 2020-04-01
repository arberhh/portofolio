import * as React from "react";
import styles from "../components/styles";
import ContactLink from "../components/contact-link";

function Contact() {
  return (
    <div style={styles.container}>
      <ContactLink title="Github" link="https://github.com/arberhh" />
      <ContactLink title="Twitter" link="https://twitter.com/ahaxhimusa" />
      <ContactLink
        title="Facebook"
        link="https://www.facebook.com/arberi.haxhimusa"
      />
      <ContactLink title="Gmail" link="arberi.hh@gmail.com" />
    </div>
  );
}

export default Contact;
