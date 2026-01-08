import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          COREY & SON <span className="d-none d-sm-inline opacity-50 fw-light">| Landscaping & Power Washing</span>
        </Link>
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link px-3 fw-bold" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 fw-bold" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 fw-bold" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 fw-bold" to="/portfolio">Our Work</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 fw-bold" to="/contact">Contact</NavLink>
            </li>
          </ul>
          <Link to="/contact" className="btn btn-primary ms-lg-3">Request Estimate</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
