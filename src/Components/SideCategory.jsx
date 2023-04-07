import React from "react";
import "../styles/SideCategory.scss";
import { AiFillForward } from "react-icons/ai";

const SideCategory = () => {
  return (
    <div className="mt-3 pt-5">
      <div className="p-3 rounded d-flex flex-column gap-2 guideline-section">
        <p className="title-sidecate">বিদেশ জবস্ এর গাইডলাইন</p>
        <a href="" className="navs-sidecate">
          <AiFillForward className="mb-1 me-1" />
          বিদেশ জবস্"-নির্দেশিকা
        </a>
        <a href="" className="navs-sidecate">
          <AiFillForward className="mb-1 me-1" />
          বিদেশে যাওয়ার গাইডলাইন
        </a>
        <a href="" className="navs-sidecate">
          <AiFillForward className="mb-1 me-1" />
          বিদেশে চাকরির পূর্ব প্রস্তুতি
        </a>
        <a href="" className="navs-sidecate">
          <AiFillForward className="mb-1 me-1" />
          বিদেশে যাওয়ার প্রাসঙ্গিক কাজ
        </a>
        <a href="" className="navs-sidecate">
          <AiFillForward className="mb-1 me-1" />
          বিদেশের যাত্রাপথে করনীয়
        </a>
        <a href="" className="navs-sidecate">
          <AiFillForward className="mb-1 me-1" />
          বিদেশে জীবনযাত্রা
        </a>
      </div>
    </div>
  );
};

export default SideCategory;
