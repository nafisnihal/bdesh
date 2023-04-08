import React from "react";
import "../styles/VideoAndJoint.scss";
import bdjobslogo from "../assets/images/Bdjobs-logo.png";
import promo from "../assets/images/promo-video-home.jpg";
import iom from "../assets/images/IOM.png";

const VideoAndJoint = () => {
  return (
    <div id="video-and-joint">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <p className="fs-4 fw-bold">Bdesh Jobs, in trust and reliance</p>
            <div>
              <img src={promo} alt="" className="rounded" />
            </div>
          </div>
          <div className="col-md-6">
            <p className="fs-4 fw-bold">Jointly Organized</p>
            <div className="d-flex align-items-center gap-3">
              <div className="p-4 bg-white rounded">
                <a href="https://www.bdjobs.com/">
                  <img src={bdjobslogo} alt="" />
                </a>
              </div>
              <div className="p-1 bg-white rounded">
                <a href="https://bangladesh.iom.int/">
                  <img src={iom} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAndJoint;
