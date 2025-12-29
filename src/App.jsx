import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import Home from "./page/Home";
import Properties from "./page/Properties";
import Contact from "./page/Contact";
import Propertydetails from "./page/Propertydetails";

function App() {
  return (
    <Router>
      <NavbarComp />

      <Routes>
        <Route path="/landproject" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/propertydetail/:id" element={<Propertydetails />} />
      </Routes>
    </Router>
  );
}

export default App;
