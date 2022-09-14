import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Link to={"/"}>Home</Link>
            <Nav className="me-auto">
              <Link to={"/movies"}>Movies</Link>
              
              {/* <Link to={"/movies/id"}>Details</Link> */}
              <Link to={"/addmov"}>Addmov</Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default NavigationBar;
