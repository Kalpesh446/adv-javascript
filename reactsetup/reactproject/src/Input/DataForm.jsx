import { Button, Form, FloatingLabel, Table } from "react-bootstrap";
import "./DataForm.css";
import React, { useState } from "react";

export default function DataForm() {
  let [DateForm, SetDataForm] = useState({
    FullName: "",
    Emailaddress: "",
    Address: "",
    Mobileno: "",
    Password: "",
  });

  let [userData, setUserData] = useState([]);

  function getData(e) {
    console.log("====>", e.target.name);
    SetDataForm({ ...DateForm, [e.target.name]: e.target.value });
  }

  function submitHandler() {
    setUserData([...userData, DateForm]);
    SetDataForm({
      FullName: "",
      Emailaddress: "",
      Address: "",
      Mobileno: "",
      Password: "",
    });
  }
  return (
    <>
      <div className="formdata h-100 w-50 ">
        <Form>
          <h1>Personal Data Form</h1>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={DateForm.FullName}
              name="FullName"
              type="Name"
              onChange={(e) => getData(e)}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={DateForm.Emailaddress}
              type="email"
              name="Emailaddress"
              onChange={(e) => getData(e)}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Label>Address</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Address"
            className="mb-3 text-muted "
          >
            <Form.Control
              value={DateForm.Address}
              as="textarea"
              name="Address"
              onChange={(e) => getData(e)}
              placeholder="Leave a comment here"
            />
          </FloatingLabel>
          <Form.Group className="mb-3" controlId="formBasicMobile">
            <Form.Label>Mobile no:</Form.Label>
            <Form.Control
              value={DateForm.Mobileno}
              type="text"
              name="Mobileno"
              onChange={(e) => getData(e)}
              placeholder="Enter mobile number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={DateForm.Password}
              type="password"
              name="Password"
              onChange={(e) => getData(e)}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            className="  d-flex justify-content-center fw-bold "
            variant="primary"
            onClick={() => submitHandler()}
          >
            Submit
          </Button>
        </Form>
      </div>

      {/* table to add data */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Sr no.</th>
            <th>Full Name</th>
            <th>Email address</th>
            <th>Address</th>
            <th>mobile no</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.FullName}</td>
                <td>{e.Emailaddress}</td>
                <td>{e.Address}</td>
                <td>{e.Mobileno}</td>
                <td>{e.Password}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
