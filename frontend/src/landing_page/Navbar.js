import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white border-bottom sticky-top shadow-sm"
      style={{ zIndex: 999 }}
    >
      <div className="container">

        {/* Logo */}

        <Link className="navbar-brand" to="/">
          <img
            src="media/logo.svg"
            alt="Zerodha Logo"
            style={{ width: "150px" }}
          />
        </Link>

        {/* Mobile Toggle */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav align-items-center">

            <li className="nav-item mx-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
                to="/signup"
              >
                Signup
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
                to="/product"
              >
                Product
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
                to="/pricing"
              >
                Pricing
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
                to="/support"
              >
                Support
              </NavLink>
            </li>

            <li className="nav-item ms-3">
              <Link className="nav-link" to="/">
                <i className="fa fa-bars fa-lg"></i>
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;