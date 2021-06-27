import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function NavBar() {
  return (
    <div className="navbar">
      {/* enlace1 */}
      <Link to="/">
        <p className="textoNav">Home</p>
      </Link>

      {/* enlace2 */}
      <Link to="/">
        <p className="textoNav">Todo App</p>
      </Link>
    </div>
  );
}

export default NavBar;
