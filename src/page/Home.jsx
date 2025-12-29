import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => {
  return (
    <>
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

      <div className="container">
        <div className="text-center   align-items-center text-light mt-3">
          <h1>A Real Estate Agency in Coimbatore.</h1>
          <div>
            <h1>Buy, Sell or Rent Property</h1>
          </div>
        </div>
      </div>

      <div className="fluid-container">
        <div className="d-flex justify-content-center align-items-center text-wrap ">
          <h6 className="text-secondary  " id="homeabout">
            KPM Realtors, a reliable Real Estate agency in Coimbatore, best in
            kind to provide one stop assistance on properties in and around
            Coimbatore. We facilitate highly effective services to our clients.
            Only Real estate agency in Coimbatore with a repository of
            information and data will help you make the right decision.
          </h6>
        </div>
      </div>

      
    </>
  );
};

export default Home;
