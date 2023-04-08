import React from "react";
import "../styles/FindJob.scss";
import { FaBriefcase, FaGlobeAsia } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const FindJob = () => {
  return (
    <div id="find-job" className="d-flex flex-column">
      <div className="d-flex flex-column align-items-start mt-4 mb-5">
        <h1 className="title-1 mb-4">Find your dream job</h1>
        <div className="w-100">
          <label htmlFor="inputOccupation" className="title-2 mb-2">
            <FaBriefcase className="mb-1 me-1" /> Write your occupation
          </label>
          <input
            type="email"
            className="form-control mb-3"
            id="inputOccupation"
            placeholder="Driver, electician, etc"
          ></input>
        </div>
        <div className="mt-2 w-100">
          <p className="title-2 mb-2">
            <FaGlobeAsia className="mb-1 me-1" /> Skilled Category
          </p>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
          >
            <option selected>Select Skill</option>
            <option value="1">Skilled</option>
            <option value="2">Semi Skilled</option>
            <option value="3">Less Skilled</option>
          </select>
        </div>
        <div className="mt-2 w-100">
          <p className="title-2 mb-2">
            <MdLocationPin className="mb-1 me-1" /> Country
          </p>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
          >
            <option selected>Select Country</option>
            <option value="1">United Arab Emirates</option>
            <option value="2">Saudi Arabia</option>
            <option value="3">Japan</option>
            <option value="4">South Korea</option>
            <option value="5">Malaysia</option>
            <option value="6">Oman</option>
            <option value="7">Denmark</option>
            <option value="8">Jordan</option>
          </select>
        </div>
        <button type="submit" className="search-btn">
          Search
        </button>
      </div>
    </div>
  );
};

export default FindJob;
