import React from "react";
import "../styles/Summary.scss";
import { MdPeopleAlt } from "react-icons/md";

const Summary = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="py-4 d-flex justify-content-center align-items-center">
            <MdPeopleAlt className="summary-icons-vacancy" />
            <div>
              <p className="title-5 mb-0">No. of vacanies</p>
              <p className="vacancy-number mb-0">130</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="py-4 d-flex justify-content-center align-items-center">
            <MdPeopleAlt className="summary-icons-jobs" />
            <div>
              <p className="title-5 mb-0">No. of jobs</p>
              <p className="jobs-number mb-0">12</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="py-4 d-flex justify-content-center align-items-center">
            <MdPeopleAlt className="summary-icons-country" />
            <div>
              <p className="title-5 mb-0">No. of countries</p>
              <p className="country-number mb-0">8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
