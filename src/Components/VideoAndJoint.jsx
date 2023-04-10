import React from "react";
import "../styles/VideoAndJoint.scss";
import bdjobslogo from "../assets/images/Bdjobs-logo.png";
import promo from "../assets/images/promo-video-home.jpg";
import iom from "../assets/images/IOM.png";

const VideoAndJoint = () => {
  return (
    <div id="video-and-joint">
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-5 pb-3">
            <p className="fs-4 fw-bold">Bdesh Jobs, in trust and reliance</p>
            <div>
              <button
                className="border-0"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img src={promo} alt="" className="rounded img-fluid" />
              </button>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content bg-black">
                    <div class="modal-body">
                      <div class="ratio ratio-16x9">
                        <iframe
                          src="https://www.youtube.com/embed/e3wpqRBmWGU"
                          title="YouTube video"
                          muted={true}
                        ></iframe>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary m-0"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pt-5 pb-3">
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
