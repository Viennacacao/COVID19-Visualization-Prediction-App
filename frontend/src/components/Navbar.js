import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/visualization">Visualization</Link>
      <Link to="/prediction">Prediction</Link>
    </div>
  );
}

export default Navbar;
