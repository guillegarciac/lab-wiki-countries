import React from "react";
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" style={{marginLeft: "10px"}} to="/">LAB - Wiki Countries</NavLink>
    </nav>
  );
}