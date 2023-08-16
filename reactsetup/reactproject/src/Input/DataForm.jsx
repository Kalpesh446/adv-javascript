import {
  Form,
  Button,
  Table,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./DataForm.css";
import React, { useState } from "react";
import { useEffect } from "react";

export default function DataForm() {
  let [dateForm, setDataForm] = useState({
    FullName: "",
    Email: "",
    Password: "",
    Address: "",
    Mobile: "",
    City: "",
    State: "",
  });

  let [userData, setUserData] = useState([]);
  let [isIndex, setisIndex] = useState(null);

  // to setdata
  function getData(e) {
    console.log("====>", e.target.name);
    setDataForm({ ...dateForm, [e.target.name]: e.target.value });
  }

  function submitHandler() {
    setUserData([...userData, dateForm]);
    setDataForm({
      FullName: "",
      Email: "",
      Password: "",
      Address: "",
      Mobile: "",
      City: "",
      State: "",
    });
    localStorage.setItem("userData", JSON.stringify([...userData, dateForm]));
  }

  // add data from input to table
  function updateHandler(ele, index) {
    setDataForm(ele);
    setisIndex(index);
  }

  // Delete data
  function handleDelete(index) {
    userData.splice(index, 1);
    setUserData([...userData]);
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  // to delete all data
  function deleteAll() {
    if (window.confirm("Are you sure you want to delete all data?"))
      setUserData([]);
    localStorage.clear();
  }
  // edit data is change then savechange to add data updated data
  function saveChanges() {
    if (isIndex || isIndex === 0) {
      userData.splice(isIndex, 1, dateForm);
      setUserData([...userData]);
      setDataForm({
        FullName: "",
        Email: "",
        Password: "",
        Address: "",
        Mobile: "",
        City: "",
        State: "",
      });
      setisIndex(null);
    } else {
      alert("please select any name");
    }
    localStorage.setItem("userData", JSON.stringify([...userData]));
  }

  useEffect(() => {
    let data = localStorage.getItem("userData");
    let normalData = JSON.parse(data);
    setUserData([...normalData]);
  }, []);
  return (
    <>
      <div className="Formdiv d-flex   text-center justify-content-center align-content-center ">
        <Form className=" card">
          <div className="head">
            <img src="./images/reg.png" alt="" />
          </div>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">Full Name</Label>
                <Input
                  type="Text"
                  id="exampleFullName"
                  name="FullName"
                  onChange={(e) => getData(e)}
                  value={dateForm.FullName}
                  placeholder="Enter Your Name"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  value={dateForm.Email}
                  type="Email"
                  id="exampleEmail"
                  name="Email"
                  onChange={(e) => getData(e)}
                  placeholder="Enter Email id"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  value={dateForm.Password}
                  name="Password"
                  placeholder="Enter Password"
                  onChange={(e) => getData(e)}
                  type="password"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input
                  id="exampleAddress"
                  type="text"
                  value={dateForm.Address}
                  name="Address"
                  placeholder="Enter Address"
                  onChange={(e) => getData(e)}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleMobile">Mobile number:</Label>
                <Input
                  type="number"
                  id="exampleMobile"
                  value={dateForm.Mobile}
                  name="Mobile"
                  onChange={(e) => getData(e)}
                  placeholder="Enter mobile no"
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input
                  id="exampleCity"
                  value={dateForm.City}
                  name="City"
                  onChange={(e) => getData(e)}
                  placeholder="Enter City"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input
                  id="exampleState"
                  type="text"
                  value={dateForm.State}
                  name="State"
                  placeholder="Enter State"
                  onChange={(e) => getData(e)}
                />
              </FormGroup>
            </Col>
          </Row>

          <Button onClick={() => submitHandler()} className=" bg-primary mt-2 ">
            Add data
          </Button>
          <Button
            onClick={() => saveChanges()}
            className="mt-2 ms-2   bg-info-subtle text-black"
          >
            Save Changes
          </Button>
          <Button onClick={() => deleteAll()} className="mt-2 ms-2   bg-danger">
            Delete All
          </Button>
        </Form>
      </div>

      {/* table to add data */}
      {userData.length > 0 ? (
        <Table className=" w-75 justify-content-center">
          <thead>
            <tr>
              <th>Sr no.</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Address</th>
              <th>mobile no</th>
              <th>City</th>
              <th>State</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((e, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.FullName}</td>
                <td>{e.Email}</td>
                <td>{e.Password}</td>
                <td>{e.Address}</td>
                <td>{e.Mobile}</td>
                <td>{e.City}</td>
                <td>{e.State}</td>
                <td>
                  <button
                    className=" bg-danger"
                    onClick={() => handleDelete(i)}
                  >
                    Delete
                  </button>
                  <button
                    className=" bg-success  ms-1"
                    onClick={() => updateHandler(e, i)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : null}
    </>
  );
}
