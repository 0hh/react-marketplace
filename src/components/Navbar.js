import React from "react";
import { Menu as Nav, Button } from "element-react";
import { NavLink } from "react-router-dom";

const Navbar = ({ user, handleSignout }) => (
  <Nav mode="horizontal" theme="light" defaultActive="1">
    <div className="nav-container">
      {/* App Title / Icon */}
      <Nav.Item index="1">
        <NavLink to="/" className="nav-link">
          <span className="app-title">
          <span role="img" aria-label="money">🤑</span> Dimis Marketplace</span>
        </NavLink>
      </Nav.Item>

      {/* Navbar Items */}
      <div className="nav-items">
        <Nav.Item index="2">
          <span className="app-user">Signed in as {user.username}</span>
        </Nav.Item>
        <Nav.Item index="3">
          <NavLink to="/profile" className="nav-link">
            <span role="img" aria-label="money">⚙️</span> Profile
          </NavLink>
        </Nav.Item>
        <Nav.Item index="4">
          <Button onClick={handleSignout}>
            Sign Out
          </Button>
        </Nav.Item>
      </div>
    </div>
  </Nav>
);

export default Navbar;
