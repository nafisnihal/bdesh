import React from "react";
import "../styles/Summary.scss";
import { MdPeopleAlt } from "react-icons/md";
import { ImWrench } from "react-icons/im";
import { FaGlobeAsia } from "react-icons/fa";

const Summary = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-around">
        <div className="col-md-4">
          <div className="py-4 d-flex flex-column flex-md-row justify-content-center align-items-center">
            <MdPeopleAlt className="summary-icons-vacancy me-md-4" />
            <div>
              <p className="title-5 mb-0 text-center ">No. of vacanies</p>
              <p className="vacancy-number mb-0 text-center">130</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="py-4 d-flex flex-column flex-md-row  justify-content-center align-items-center">
            <ImWrench className="summary-icons-jobs me-md-4" />
            <div>
              <p className="title-5 mb-0 text-center">No. of jobs</p>
              <p className="jobs-number mb-0 text-center">12</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="py-4 d-flex flex-column flex-md-row  justify-content-center align-items-center">
            <FaGlobeAsia className="summary-icons-country me-md-4" />
            <div>
              <p className="title-5 mb-0 text-center">No. of countries</p>
              <p className="country-number mb-0 text-center">8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
