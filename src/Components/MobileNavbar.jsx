import React from "react";
import "../styles/MobileNavbar.scss";
import logo from "../assets/images/logo_bdesh.svg";
import joint from "../assets/images/Joint_venture.png";
import profile from "../assets/images/profile.jpg";
import { FaPhone, FaSignOutAlt } from "react-icons/fa";
import {
  HiDocumentText,
  HiOutlineDocumentText,
  HiDocument,
} from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillFacebook, AiFillYoutube, AiFillForward } from "react-icons/ai";

const MobileNavbar = () => {
  return (
    <div id="mobile-navbar" className="d-block d-md-none">
      <div className="py-3 d-flex justify-content-around">
        <div>
          <a
            className="ms-3"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <AiOutlineMenu className="fs-2 text-secondary" />
          </a>
          <div
            className="offcanvas offcanvas-start vw-100"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
              <div className="offcanvas-title" id="offcanvasExampleLabel">
                <AiFillFacebook className="fs-2 px-1 text-white bg-primary rounded me-1" />
                <AiFillYoutube className="fs-2 px-1 text-white bg-danger rounded me-1" />
              </div>
            </div>
            <div className="offcanvas-body mx-3 mt-3">
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
              <div className="navbar-menu-alt d-flex align-items-center gap-2 mt-4">
                <FaPhone className="fs-5" />
                <a
                  href="https://www.bdjobs.com/contact.asp?lanset=eng"
                  className="navbar-menu-alt"
                >
                  Contact Us
                </a>
              </div>
              <hr className="my-5" />
              <div>
                <div className="d-flex flex-column gap-3 align-items-start">
                  <a href="https://bdjobs.com/" className="mobile-navbar-menu">
                    Bdjobs
                  </a>
                  <a
                    href="https://bdesh.bdjobs.com/jobsearch.asp"
                    className="mobile-navbar-menu"
                  >
                    Jobs
                  </a>
                  <a
                    href="https://mybdjobs.bdjobs.com/mybdjobs/welcome.asp"
                    className="mobile-navbar-menu"
                  >
                    Job Seeker Account
                  </a>
                  <a
                    href="https://corporate3.bdjobs.com/default.asp"
                    className="mobile-navbar-menu"
                  >
                    Recruitment Agency / Foreign Employers
                    <AiFillForward className="ms-2 fs-5" />
                  </a>
                </div>
              </div>
              <hr className="my-5" />
              <div className="d-flex flex-column align-items-center gap-5">
                <p className="mobile-navbar-menu">বাংলাতে দেখুন</p>
                <img src={joint} alt="" className="w-75" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-fill ms-5 ps-4">
          <a href="">
            <img src={logo} alt="" className="logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
