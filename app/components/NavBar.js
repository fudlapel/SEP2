import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/campuses">Campuses</Link>
        <Link to="/students">Students</Link>
      </nav>
    </div>
  );
};

export default Navbar;
