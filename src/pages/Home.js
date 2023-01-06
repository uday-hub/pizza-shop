import React from "react";
import { Link } from "react-router-dom";
// import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div
        className="headerContainer"
        // style={{ backgrondImage: `url(${BannerImage})` }}
      >
        <h1> Pedro's Pizzeria</h1>
        <p> PIZAA TO FIT ANT TASTE </p>
        <Link to={"/menu"}>
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
