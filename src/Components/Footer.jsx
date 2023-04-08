import React from 'react'
import "../styles/Footer.scss"
import gplay from "../assets/images/google-play-badge.svg"
import call from "../assets/images/call.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-2 me-5">
            <p className="footer-title">About Us</p>
            <div className="d-flex flex-column gap-2">
              <a href="" className="footer-navs">
                About website
              </a>
              <a href="" className="footer-navs">
                Terms & Conditions
              </a>
              <a href="" className="footer-navs">
                Feedback
              </a>
            </div>
          </div>
          <div className="col-md-2 me-5">
            <p className="footer-title">Job Seekers</p>
            <div className="d-flex flex-column gap-2">
              <a href="" className="footer-navs">
                Create Account
              </a>
              <a href="" className="footer-navs">
                Career Counseling
              </a>
              <a href="" className="footer-navs">
                FAQ
              </a>
            </div>
          </div>
          <div className="col-md-2 me-5">
            <p className="footer-title">Employers</p>
            <div className="d-flex flex-column gap-2">
              <a href="" className="footer-navs">
                Create Account
              </a>
              <a href="" className="footer-navs">
                Products/Service
              </a>
              <a href="" className="footer-navs">
                Post a Job
              </a>
              <a href="" className="footer-navs">
                FAQ
              </a>
            </div>
          </div>
          <div className="col-md-2 me-5">
            <p className="footer-title">Tools & Social Media</p>
            <div className="d-flex flex-column gap-2">
              <a href="" className="footer-navs">
                Download Mobile App
              </a>
              <a href="" className="footer-navs">
                <img src={gplay} alt="" />
              </a>
            </div>
          </div>
          <div className="col-md-2">
            <p className="footer-title">Contact Us</p>
            <div className="d-flex flex-column gap-2">
              <a href="" className="footer-navs">
                Have any job query ?
              </a>
              <a href="" className="footer-navs">
                <img src={call} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer