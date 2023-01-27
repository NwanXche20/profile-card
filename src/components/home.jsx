import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <Link to="/register">
          <button type="button" className="btn">
            Click to register and see your profile card
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
