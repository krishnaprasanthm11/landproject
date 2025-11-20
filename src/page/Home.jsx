import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-center"
      style={{
        height: "100vh",
        color: "white",
      }}
      id="mainpg"
    >
      <Container>
        <h1
          className="  "
          style={{ fontSize: "3rem", fontWeight: "bold", color: "#ff09caff" }}
        >
          Find Your Dream Home Today
        </h1>
        <p
          className="lead fw-semibold"
          style={{ fontSize: "3rem", color: "#77ca34ff" }}
          id="animat"
        >
          Explore the best lands and houses for sale in your city.
        </p>
        <Button
          as={Link}
          to="/properties"
          variant="light"
          size="lg"
          className="bg-primary text-light fw-bolder "
          id="btnstyle"
        >
          View Properties
        </Button>
      </Container>
    </div>
  );
};

export default Home;
