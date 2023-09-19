import { Search } from "lucide-react";
import React, { useState } from "react";
import "./HeaderCom.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function HeaderCom(args) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="navbarmenu">
      <Navbar expand={"lg"}>
        <NavbarBrand className=" p-0 m-0" style={{ color: "white" }} href="/">
          <div className="Logoname">
            {" "}
            <img className="logo" src=" images/logo.png" alt="" /> Food Restoran
          </div>
        </NavbarBrand>

        <Collapse navbar>
          <Nav className="navall me-auto " navbar>
            <NavItem>
              <NavLink href="">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Pizza</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Burger</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">About</NavLink>
            </NavItem>
          </Nav>
          <input
            style={{
              outline: "none",
              color: "#7c6e6e",
            }}
            className="border-0 rounded-1 p-1 w-25 ps-2 "
            type="text"
            placeholder="Search your text here....! "
            onChange={(e) => setSearchText(e?.target?.value)}
          />
          <a href="">
            <Search className="ms-2 me-5" color="black" />
          </a>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderCom;
