import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default ContactForm;
