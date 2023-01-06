import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <lable htmlFor="name">Full Name</lable>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            required
          />
          <lable htmlFor="email">Email</lable>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            required
          />
          <lable htmlFor="message">Message</lable>
          <textarea
            name="message"
            placeholder="Enter message..."
            rows="6"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
