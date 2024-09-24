import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="main-footer-bottom d-block text-center">
      <ul>
        <li>
          <NavLink className="nav-item" to={"/"}>
            <img src="/assets/img/icon/svg/home.svg" alt="icon" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to={"/games"}>
            <img src="/assets/img/icon/svg/sports.svg" alt="img" />
            Games
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item menu-bar" to={"/activities"}>
            <img src="/assets/img/icon/svg/ticket.svg" alt="img" />
            Activities
          </NavLink>
        </li>

        <li>
          <NavLink className="nav-item" to={"/account"}>
            <img src="/assets/img/icon/svg/profile.svg" alt="img" />
            Account
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
