import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../assets/logo.jpg'; 


const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar navbar-expand bg-white shadow fixed-top">
      <div className="collapse navbar-collapse navbar2">
        <div className=" ms-5 d-flex justify-content-start">
          <img src={logo} alt="Logo" style={{ width: '100px', height: '70px' }} className="compName mt-4 img-responsive "  />
        </div>
        <div className="ml-auto"> {/* This div can be removed for left alignment */}
          <ul className="navbar-nav me-auto mb-2">
            <li className="mt-4 hideContaint">
              <Link to="/" className="text-dark nav-link ms-5 me-3 btnhover"><b>Home</b></Link>
            </li>
            <li className="ms-3 mt-4 hideContaint">
              <Link to="/about" className="text-dark nav-link me-3"><b>About Us</b></Link>
            </li>
            <li className="ms-3 mt-4 hideContaint">
              <Link to="/services" className="text-dark nav-link me-3 btnhover"><b>Services</b></Link>
            </li>
            <li className="ms-3 mt-4 hideContaint">
              <Link to="/projects" className="text-dark nav-link me-3 btnhover"><b>Projects</b></Link>
            </li>
            <li className="ms-3 mt-4 hideContaint">
              <Link to="/team" className="text-dark nav-link me-3 btnhover"><b>Team Details</b></Link>
            </li>
            <li className="mt-4 hideContaint">
              <Link to="/contact" className="text-dark nav-link me-3 btnhover"><b>Contact</b></Link>
            </li>
          </ul>
        </div>
        {/* <div className="bars">
          <button className="btn btn-outline-dark btn-floating m-1 hideBars" onClick={toggleSidebar}>
            <i className={`fa ${isSidebarOpen ? 'fa-close' : 'fa-bars'} fa-lg`}></i>
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
