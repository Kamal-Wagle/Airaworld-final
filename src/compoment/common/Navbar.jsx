import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const handleItemClick = () => {
    closeNav();
  };

  const navItems = [
    { id: 1, Name: "Home", path: "/" },
    { id: 2, Name: "About Us", path: "/about" },
    // { id: 3, Name: "Board", path: "/Abcdboard" },
    { id: 4, Name: "Projects", path: "/projects" },
    { id: 5, Name: "Admin Team", path: "/admin-team" },
    { id: 6, Name: "Research Team", path: "/research-team" },
    { id: 8, Name: "Developer Team", path: "/developer-team" },
    { id: 9, Name: "eLearning", path: "/elearning-center" },
    { id: 14, Name: "Blogs", path: "/blogs" },
    { id: 11, Name: "Youtube", path: "/youtube" },
    { id: 14, Name: "Gallery", path: "/gallery" },
    { id: 10, Name: "Search Site", path: "/SearchSite" },
    { id: 10, Name: "Get in Touch", path: "/getintouch" },
  ];

  return (
    <>
    <div>
      <div className={`overlay ${isOpen ? "open" : ""}`}>
        <button className="closebtn" onClick={closeNav}>
          &times;
        </button>
        <div className="overlay-content">
          {navItems.map((item, index) => (
            <Link to={item.path} key={index} onClick={handleItemClick}>
              <Button sx={{color:"white"}}>{item.Name}</Button>
              
            </Link>
          ))}
          
        </div>
      </div>

      <nav className="navbar">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
          <img
      src="/Logo2.png"
      alt="logo"
      style={{
        height: "118px", // Adjust height as needed
        width: "118px", // Adjust width as needed
        margin: "0 auto", // Center horizontally
        display: "block", // Ensures it behaves as a block element
        textAlign: "center", // Centers the image inside its container
        objectFit: "cover", // Ensures the image covers the entire space
      }}
    />
          </Link>
        </div>
        <div className="nav-items">
          {navItems.map((item, index) => (
            <Link to={item.path} key={index}>
              <Button className="aa" sx={{color:"black" , fontWeight:"bold"} }>{item.Name}</Button>
            </Link>
          ))}
        </div>
        <span className="nav-toggle" onClick={openNav}>
          &#9776;
        </span>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
