import React from "react";
import "../styles/Navbar.scss";
import logo from "../assets/images/logo_bdesh.svg";
import joint from "../assets/images/Joint_venture.png";
import profile from "../assets/images/profile.jpg";
import { FaPhone, FaSignOutAlt } from "react-icons/fa";
import {
  HiDocumentText,
  HiOutlineDocumentText,
  HiDocument,
} from "react-icons/hi";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="container py-3 d-none d-md-flex justify-content-between">
        <div className="logo">
          <a href="">
            <img src={logo} alt="" className="img-fluid" />
          </a>
        </div>
        <div>
          <img src={joint} alt="" />
        </div>
        <div className="d-flex align-items-center gap-4">
          <div className="dropdown">
            <div
              className="d-flex align-items-center gap-2 dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              role="button"
            >
              <img src={profile} alt="" className="profile-picture" />
              <a href="#" className=" navbar-menu">
                Nafis Nihal
              </a>
            </div>
            <ul className="dropdown-menu mt-2">
              <li>
                <a className="dropdown-item" href="#">
                  <HiDocument className="mb-1 me-2" />
                  View Resume
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <HiDocumentText className="mb-1 me-2" />
                  Edit Resume
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <HiOutlineDocumentText className="mb-1 me-2" />
                  Applied Jobs
                </a>
              </li>
              <hr className="mb-0 mt-1" />
              <li>
                <a className="dropdown-item" href="#">
                  <FaSignOutAlt className="mb-1 me-2" />
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-menu-alt d-flex align-items-center gap-2">
            <FaPhone className="fs-5" />
            <a
              href="https://www.bdjobs.com/contact.asp?lanset=eng"
              className="navbar-menu-alt"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
