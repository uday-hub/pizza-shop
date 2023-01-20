import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1> More's Pizzeria</h1>
        <p> PIZAA TO FIT AND TASTE </p>
        <Link to={"/menu"}>
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
