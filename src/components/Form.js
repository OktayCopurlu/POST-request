//this form for sending form to database
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useReducer } from "react";

const formReducer = (state, event) => {
  return {...state,[event.name]: event.value,};
};
function Forms() {

  const [data, setData] = useReducer(formReducer, {});

  function submit(event) {
    event.preventDefault();

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };

      fetch("http://174.138.103.233/api/employees", requestOptions)
        .then((response) => response.json())
        .then((json) => setData(json.data));
  }

  const dataChange = (event) => {
    setData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <>
      <div className="container">
        <Form onSubmit={submit}>
          <Form.Group className="personal" controlId="formGridName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              onChange={dataChange}
              type="name"
              placeholder="First name"
            />
          </Form.Group>
          <Form.Group className="personal" controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              onChange={dataChange}
              type="Lastname"
              placeholder="Last Name"
            />
          </Form.Group>
          <Form.Group className="personal" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              onChange={dataChange}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="personal" controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              onChange={dataChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="personal" controlId="formGridGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              name="gender"
              onChange={dataChange}
              type="text"
              placeholder="Gender"
            />
          </Form.Group>
          <Form.Group className="personal" controlId="formGridBirthday">
            <Form.Label>Birthday</Form.Label>
            <Form.Control
              name="birthday"
              onChange={dataChange}
              type="date"
              placeholder="1234 Main St"
            />
          </Form.Group>
          <Form.Group className="personal" controlId="exampleForm.ControlAbout">
            <Form.Label>About</Form.Label>
            <Form.Control
              name="about"
              onChange={dataChange}
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
