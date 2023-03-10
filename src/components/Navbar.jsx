import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const showBackButton = location.pathname !== "/";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {showBackButton && (
        <button className="btn-back navbar-brand" onClick={() => navigate(-1)}>
          &lt; Back
        </button>
      )}
      {!showBackButton && (
        <NavLink className="navbar-brand mx-auto" to="/" style={{ width: '300px' }}>
          LAB - Wiki Countries
        </NavLink>
      )}
    </nav>
  );
}