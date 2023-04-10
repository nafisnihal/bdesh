import React from "react";
import "../styles/Header.scss";
import { AiFillFacebook, AiFillYoutube, AiFillForward } from "react-icons/ai";

const Header = () => {
  return (
    <div id="header">
      <div className="container d-md-flex justify-content-between d-none">
        <div className="d-flex gap-5 align-items-center">
          <a href="https://bdjobs.com/" className="header-menu">
            Bdjobs
          </a>
          <a
            href="https://bdesh.bdjobs.com/jobsearch.asp"
            className="header-menu"
          >
            Jobs
          </a>
          <a
            href="https://mybdjobs.bdjobs.com/mybdjobs/welcome.asp"
            className="header-menu"
          >
            Job Seeker Account
          </a>
          <a
            href="https://corporate3.bdjobs.com/default.asp"
            className="header-menu-special"
          >
            Recruitment Agency / Foreign Employers
            <AiFillForward className="ms-2 fs-5" />
          </a>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <a href="https://www.facebook.com/mybdjobs" className="my-auto">
            <AiFillFacebook className="text-white header-social fs-4 p-1 rounded-circle" />
          </a>
          <a href="https://www.youtube.com/mybdjobs" className="my-auto">
            <AiFillYoutube className="text-white bg-danger fs-4 p-1 rounded-circle" />
          </a>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              checked
            ></input>
            <label
              className="btn btn-outline-primary my-1 py-1 header-radio"
              htmlFor="btnradio1"
            >
              ENG
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
            ></input>
            <label
              className="btn btn-outline-primary my-1 py-1 header-radio-alt"
              htmlFor="btnradio2"
            >
              বাংলা
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
