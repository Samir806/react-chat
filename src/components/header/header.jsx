import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  debugger;
  return (
    <header className="header">
      <img src="https://i.ya-webdesign.com/images/book-logo-png-12.png" />
      <div className="log">
        {props.isAuth ? 'Welcome ' + props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
