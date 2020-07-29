import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  let user = props.user ? (
    <div className="div">
      <Link to="" className="NavBar-link" onClick={props.handleLogout}>
        LOG OUT
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className="NavBar-welcome">WELCOME, {props.user.name}</span>
      <div>
        <Link className="NavBar-list" to="/">
          ACTIVITY LIST
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link className="NavBar-add" to="/create">
          ADD ACTIVITY
        </Link>
      </div>
    </div>
  ) : (
    <div>
      <Link to="/login" className="NavBar-link">
        LOG IN
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link">
        SIGN UP
      </Link>
    </div>
  );
  return <div className="NavBar">{user}</div>;
};

export default NavBar;
