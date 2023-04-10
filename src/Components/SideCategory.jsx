import React from "react";
import "../styles/SideCategory.scss";
import { AiFillForward } from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";

const SideCategory = () => {
  return (
    <div className="mt-3 pt-0 pt-md-5 ">
      <div className="p-4 mb-3 rounded d-flex flex-column gap-2 guideline-section">
        <p className="title-sidecate">বিদেশ জবস্ এর গাইডলাইন</p>
        <a
          href="https://bdesh.bdjobs.com/User_guide_foreign_job.asp?ug=1"
          className="navs-sidecate"
        >
          <AiFillForward className="mb-1 me-1" />
          বিদেশ জবস্"-নির্দেশিকা
        </a>
        <a
          href="https://bdesh.bdjobs.com/User_guide_digital.asp?ug=2"
          className="navs-sidecate"
        >
          <AiFillForward className="mb-1 me-1" />
          বিদেশে যাওয়ার গাইডলাইন
        </a>
        <a
          href="https://bdesh.bdjobs.com/User_guide_preparation.asp?ug=3"
          className="navs-sidecate"
        >
          <AiFillForward className="mb-1 me-1" />
          বিদেশে চাকরির পূর্ব প্রস্তুতি
        </a>
        <a
          href="https://bdesh.bdjobs.com/User_guide_need_to_be_done.asp?ug=7"
          className="navs-sidecate"
        >
          <AiFillForward className="mb-1 me-1" />
          বিদেশে যাওয়ার প্রাসঙ্গিক কাজ
        </a>
        <a
          href="https://bdesh.bdjobs.com/User_guide_need_to_be_done.asp?ug=7"
          className="navs-sidecate"
        >
          <AiFillForward className="mb-1 me-1" />
          বিদেশের যাত্রাপথে করনীয়
        </a>
        <a
          href="https://bdesh.bdjobs.com/User_guide_lifestyle.asp?ug=8"
          className="navs-sidecate"
        >
          <AiFillForward className="mb-1 me-1" />
          বিদেশে জীবনযাত্রা
        </a>
      </div>
      <div className="p-4 rounded d-flex flex-column gap-2 guideline-section">
        <p className="title-sidecate">সরকারি গুরুত্বপূর্ণ লিংক সমূহ</p>
        <a href="http://www.dip.gov.bd/" className="navs-sidecate-alt">
          <BsArrowRightCircle className="mb-1 me-1" />
          ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর
        </a>
        <a href="http://www.bteb.gov.bd/" className="navs-sidecate-alt">
          <BsArrowRightCircle className="mb-1 me-1" />
          বাংলাদেশ কারিগরি শিক্ষা বোর্ড
        </a>
        <a href="http://www.bmet.gov.bd/" className="navs-sidecate-alt">
          <BsArrowRightCircle className="mb-1 me-1" />
          জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো
        </a>
        <a href="https://probashi.gov.bd/" className="navs-sidecate-alt">
          <BsArrowRightCircle className="mb-1 me-1" />
          প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়
        </a>
      </div>
    </div>
  );
};

export default SideCategory;
