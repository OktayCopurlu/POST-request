//this page for showing data from database.

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Tables() {

  const [status, setStatus] = useState([]);
  useEffect(() => {
   
    const getReport = async () => {
      const response = await fetch("http://174.138.103.233/api/employees");
      const dataJson = await response.json();
      setStatus(dataJson);
    };
    getReport();
  }, [status]);
  
  return (
    <>
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Birthday</th>
              <th>About</th>
            </tr>
          </thead>
          <tbody>
            {status.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{element.firstName}</td>
                  <td>{element.lastName}</td>
                  <td>{element.email}</td>
                  <td>{element.gender}</td>
                  <td>{element.birthday}</td>
                  <td>{element.about}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
