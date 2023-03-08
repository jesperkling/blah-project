import React from "react";
import Container from "react-bootstrap/Container";
import ContactForm from "../components/Form";

function Contact() {
  return (
    <Container className="text-center">
      <h3>Contact</h3>
      <ContactForm />
    </Container>
  );
}

export default Contact;
