import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const ComponentNavbar = (props) => {
  return (
    <div className="mb-3">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" className="mx-auto">
          Master Karyawan
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default ComponentNavbar;
