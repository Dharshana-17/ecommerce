import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="fw-bold mb-4 dark-text">About Us</h1>
            <p className="lead mb-4">
            THE FASHION STORE caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find anywhere else. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in Vienna in 2019, we are proud to be your Online  Shop that you can rely on for our expert service and care.
            </p>
            <NavLink to="/contact" className="btn btn-dark px-3 w-100 mt-4">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="assets/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
