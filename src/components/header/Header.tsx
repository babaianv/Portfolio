import React from "react";
import NavItem from "../navItem/NavItem";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <NavItem to="/" textContent="Home"></NavItem>
      <NavItem to="/about_me" textContent="About Me"></NavItem>
      <NavItem to="/education" textContent="Education"></NavItem>
      <NavItem to="/experience" textContent="Experience"></NavItem>
      <NavItem to="/skills" textContent="Skills"></NavItem>
      <NavItem to="/contact" textContent="Contact"></NavItem>
    </div>
  );
};

export default Header;
