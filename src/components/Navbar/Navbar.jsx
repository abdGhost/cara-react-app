import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <section id="header">
        <NavLink to="/">
          <img className="logo" src="/img/logo.png" alt="Logo" />
        </NavLink>
        <div>
          <ul id="navbar">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li id="lg-bag">
              <NavLink to="/cart">
                <i className="fa-solid fa-bag-shopping"></i>
              </NavLink>
            </li>
            <NavLink to="#" id="close">
              <i className="fa-solid fa-xmark"></i>
            </NavLink>
          </ul>
        </div>
        <div id="mobile">
          <NavLink to="/cart">
            <i className="fa-solid fa-bag-shopping"></i>
          </NavLink>
          <i id="bar" className="fas fa-outdent"></i>
        </div>
      </section>
    </>
  );
}
