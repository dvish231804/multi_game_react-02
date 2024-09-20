import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div class="main-footer-bottom d-block text-center">
      <ul>
        <div class="main-footer-bottom d-block text-center">
          <ul>
            <li>
              <Link class="active" to={"/"}>
                <img src="assets/img/icon/svg/home.svg" alt="icon" />
                Home
              </Link>
            </li>
            <li>
              <a href="sports.html">
                <img src="assets/img/icon/svg/sports.svg" alt="img" />
                Games
              </a>
            </li>
            <li>
              <a class="menu-bar" href="my-bet.html">
                <img src="assets/img/icon/svg/ticket.svg" alt="img" />
                Activities
              </a>
            </li>

            <li>
              <a href="profile.html">
                <img src="assets/img/icon/svg/profile.svg" alt="img" />
                Account
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
