import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Route, Switch, NavLink } from "react-router-dom";
import Tables from "./List";
import Forms from "./Form";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto container-fluid justify-content-start">
          <NavLink className="navbar-brand" to="/">
            List
          </NavLink>
          <NavLink className="navbar-brand" to="/Register">
            Register
          </NavLink>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/"><Tables /></Route>
        <Route path="/Register"><Forms /></Route>
      </Switch>
    </>
  );
}
