import React from "react";
import { Col, Container, Row } from "reactstrap";
// import logo from "../images/logo.png";
import Typewriter from "typewriter-effect";

export default function Logo() {
  return (
    <Container>
      <Row>
        <Col md="12" className="text-center myNavbar">
          <h1><span className="logoFirst">M</span>M</h1>
          <h1 className="navbarTitle">
            <Typewriter
              options={{
                strings: [
                  "✊ Image Search App with React!",
                  "developed by Musobek Madrimov!",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </h1>
        </Col>
      </Row>
    </Container>
  );
}