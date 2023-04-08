import React from "react";
import "../styles/CountryCategory.scss";
import biodata from "../assets/images/submit_biodata.png"
import bdeshJatra from "../assets/images/bdesh_jatra.svg"

const CountryCategory = () => {
  return (
    <div id="country-category" className="d-flex flex-column align-items-start">
      <div className="mt-4">
        <p className="title-1 mb-4">Country wise vacancies</p>
        <div className="d-flex flex-column">
          <a href="" className="title-3">
            United Arab Emirates (45)
          </a>
          <a href="" className="title-3">
            Saudi Arabia (35)
          </a>
          <a href="" className="title-3">
            Japan (25)
          </a>
          <a href="" className="title-3">
            South Korea (11)
          </a>
          <a href="" className="title-3">
            Malaysia (6)
          </a>
          <a href="" className="title-3">
            Oman (6)
          </a>
          <a href="" className="title-3">
            All Countries
          </a>
        </div>
        <div className="w-75">
          <a
            href="https://mybdjobs.bdjobs.com/mybdjobs/file_upload.asp"
            className="biodata-btn d-flex align-items-center justify-content-center"
          >
            <img src={biodata} alt="" />
            <p className="title-4 ms-2 mt-2">
              Submit Your <br /> Biodata
            </p>
          </a>
        </div>
        <div className="w-75 mt-1">
          <a
            href="https://www.bdeshjaatra.com/"
            className="bdesh-btn d-flex flex-column align-items-center justify-content-center"
          >
            <img src={bdeshJatra} alt="" className="mt-2" />
            <p className="header-menu m-0">অভিবাসন বিষয়ক তথ্য</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountryCategory;
