import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <section id="header">
        {/* <a href="#">
          <img className="logo" src="img/logo.png" alt="" />
        </a> */}

        <Link to="/home">
          <img className="logo" src="img/logo.png" alt="Logo" />
        </Link>

        <div>
          <ul id="navbar">
            <li>
              <a className="active" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a href="shop.html">Shop</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li id="lg-bag">
              <a href="cart.html">
                <i className="fa-solid fa-bag-shopping"></i>
              </a>
            </li>
            <a href="#" id="close">
              {" "}
              <i className="fa-solid fa-xmark"></i>
            </a>
          </ul>
        </div>
        <div id="mobile">
          <a href="cart.html">
            <i className="fa-solid fa-bag-shopping"></i>
          </a>
          <i id="bar" className="fas fa-outdent"></i>
        </div>
      </section>
    </>
  );
}
