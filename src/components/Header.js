import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://www.seekpng.com/png/full/957-9576765_walmart-ecommerce-logo-save-money-live-better-transparent.png"
            width="400"
            height="80"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
