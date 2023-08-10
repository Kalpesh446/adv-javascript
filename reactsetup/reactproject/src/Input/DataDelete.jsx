import { Form, Button, Table } from "react-bootstrap";
import React, { useState } from "react";

export default function DataDelete() {
  let [data, setData] = useState({
    companyname: "",
    Processer: "",
    price: "",
    ram: "",
  });

  let [userData, setUserData] = useState([]);
  let [isUpdate, setIsUpdate] = useState(false);
  let [index, setIndex] = useState(null);

  function addData() {
    if (isUpdate) {
      data.splice(index, 1, firstName);
      setData([...data]);
      setFirstName("");
      setIsUpdate(false);
    } else {
      setData([...data, firstName]);
      setFirstName("");
    }
  }

  function getData(e) {
    console.log("====>", e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function submitHandler() {
    setUserData([...userData, data]);
    setData({
      companyname: "",
      Processer: "",
      price: "",
      ram: "",
    });
  }

  function handleDelete(index) {
    const updatedUserData = [...userData];
    updatedUserData.splice(index, 1);
    setUserData(updatedUserData);
  }

  // update
  function updateHandler(ele, index) {
    setIsUpdate(true);
    setFirstName(ele);
    setIndex(index);
  }

  return (
    <>
      <div className="d-flex w-50 border-1 ms-4 form bg-warning rounded-4 fs-3 fw-bold container-fluid text-bg-white ">
        <Form className="formdata w-100 ">
          <Form.Group className="mb-3 w-50 " controlId="formBasicName">
            <Form.Label className="mt-3">Company name</Form.Label>
            <Form.Control
              value={data.companyname}
              type="text"
              id="Name"
              name="companyname"
              onChange={(e) => getData(e)}
              placeholder="Enter company name"
            />
          </Form.Group>

          <Form.Group className="mb-3 w-50" controlId="formBasicName">
            <Form.Label className="mt-1 ">Processer</Form.Label>
            <Form.Control
              value={data.Processer}
              type="text"
              id="Name"
              onChange={(e) => getData(e)}
              name="Processer"
              placeholder="Enter processer name"
            />
          </Form.Group>

          <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
            <Form.Label>price</Form.Label>
            <Form.Control
              value={data.price}
              type="text"
              id="Name"
              name="price"
              onChange={(e) => getData(e)}
              placeholder="Enter prise"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Form.Group className="mb-3 w-50" controlId="formBasicram">
            <Form.Label className="mt-1 ">ram</Form.Label>
            <Form.Control
              value={data.ram}
              type="text"
              id="Name"
              onChange={(e) => getData(e)}
              name="ram"
              placeholder="Enter ram"
            />
          </Form.Group>

          <Button variant="success " onClick={() => submitHandler()}>
            Submit
          </Button>
        </Form>
      </div>

      {/* table to add data */}
      {userData.length > 0 ? (
        <Table striped bordered hover className="w-75 ms-4 ">
          <thead>
            <tr>
              <th className=" bg-danger text-light  fw-bold">Sr.</th>
              <th className=" bg-danger text-light fw-bold">Company Name</th>
              <th className=" bg-danger text-light fw-bold">Processer</th>
              <th className=" bg-danger text-light fw-bold">Price</th>
              <th className=" bg-danger text-light fw-bold">ram</th>
              <th className=" bg-danger text-light fw-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((e, i) => {
              return (
                <tr key={i}>
                  <td className="bg-warning text-light  fw-bold">{i + 1}</td>
                  <td className="bg-success text-light fw-bold">
                    {e.companyname}
                  </td>
                  <td className="bg-success text-light fw-bold">
                    {e.Processer}
                  </td>
                  <td className="bg-success text-light fw-bold">{e.price}</td>
                  <td className="bg-success text-light fw-bold">{e.ram}</td>
                  <td className="bg-success">
                    <button
                      className="bg-danger text-light fw-bold"
                      variant="danger"
                      onClick={() => handleDelete(i)}
                    >
                      DeleteCom
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}
    </>
  );
}
