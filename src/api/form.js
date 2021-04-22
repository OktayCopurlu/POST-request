//this form for sending form to database
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

function Forms() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [gender, setGender] = useState();
  const [birthday, setBirthday] = useState();
  const [about, setAbout] = useState();

  function submit(e) {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        birthday: birthday,
        email: email,
        password: password,
        about: about,
      }),
    };

    fetch(
      "http://174.138.103.233/api/employees",
      requestOptions
    ).then((response) => response.json());
  }

  return (
    <>
      <div className="container">
        <Form onSubmit={submit}>
          <Form.Group className="personal" controlId="formGridName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={(e) => setFirstName(e.target.value)}
              type="name"
              placeholder="First name"
            />
          </Form.Group>
          <Form.Group className="personal" controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={(e) => setLastName(e.target.value)}
              type="Lastname"
              placeholder="Last Name"
            />
          </Form.Group>
          <Form.Group className="personal" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="personal" controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="personal" controlId="formGridGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              onChange={(e) => setGender(e.target.value)}
              type="text"
              placeholder="Gender"
            />
          </Form.Group>
          <Form.Group className="personal" controlId="formGridBirthday">
            <Form.Label>Birthday</Form.Label>
            <Form.Control
              onChange={(e) => setBirthday(e.target.value)}
              type="date"
              placeholder="1234 Main St"
            />
          </Form.Group>
          <Form.Group className="personal" controlId="exampleForm.ControlAbout">
            <Form.Label>About</Form.Label>
            <Form.Control
              onChange={(e) => setAbout(e.target.value)}
              as="textarea"
              rows={3}
              placeholder="More information"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
export default Forms;
