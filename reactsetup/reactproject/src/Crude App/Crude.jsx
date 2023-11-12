import React from "react";
import { useState } from "react";

export default function Crude() {
  let [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      pincode: "",
    },
  });

  function getAdd(e) {
    console.log("====>", e.target.name);
    setAddress({ ...address, [e.target.name]: e.target.value });
  }

  console.log("---->", userData);
  return (
    <>
      <h1>{userData.name}</h1>
      <h1>{userData.email}</h1>
      <h1>{userData.address.line1}</h1>
      <h1>{userData.address.line2}</h1>
      <div className="h-100 w-50 bg-body-secondary ms-5 text-center">
        <form action="" className="text-bg-dark">
          <label htmlFor="">Name :</label>
          <input
            type="text"
            onChange={(e) =>
              setUserData({
                ...userData,
                name: e?.target.value,
              })
            }
            placeholder="Enter your name"
          />
          <br />
          <br />
          <label htmlFor="">age :</label>
          <input
            type="number"
            onChange={(e) =>
              setUserData({
                ...userData,
                age: e?.target.value,
              })
            }
            placeholder="Enter your age"
          />{" "}
          <br />
          <br />
          <label htmlFor="">Email :</label>
          <input
            type="email"
            onChange={(e) =>
              setUserData({
                ...userData,
                email: e?.target.value,
              })
            }
            placeholder="Enter your Email"
          />{" "}
          <br />
          <br />
          <label htmlFor="">line1 :</label>
          <input
            onChange={(e) =>
              setUserData({
                ...userData,
                address: { line1: e?.target.value },
              })
            }
            placeholder="line1"
          ></input>{" "}
          <br />
          <br />
          <label htmlFor="">line2 :</label>
          <input
            onChange={(e) =>
              setUserData({
                ...userData,
                address: { ...userData.address, line2: e?.target.value },
              })
            }
            placeholder="line2"
          ></input>{" "}
          <br /> <br />
          <label htmlFor="">city :</label>
          <input
            name="city"
            id=""
            onChange={(e) => getAdd(e)}
            placeholder="Enter city"
          ></input>{" "}
          <br /> <br />
          <label htmlFor="">state :</label>
          <input
            name="state"
            id=""
            onChange={(e) => getAdd(e)}
            placeholder="state"
          ></input>{" "}
          <br /> <br />
          <label htmlFor="">pincode :</label>
          <input
            name="pincode"
            id=""
            onChange={(e) => getAdd(e)}
            placeholder="pincode"
          ></input>{" "}
        </form>
      </div>

      {/* table to add data */}
      <div className="table">
        <thead>
          <tr>
            <th>Sr no.</th>
            <th>Name</th>
            <th>age</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
      </div>
    </>
  );
}
