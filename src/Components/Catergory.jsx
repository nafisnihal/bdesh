import React, { useState } from 'react'
import { FaTag } from "react-icons/fa";
import "../styles/Catergory.scss"
import SpecialCategories from './SpecialCategories';
import GeneralCategories from './GeneralCategories';
import OpenAccounts from './OpenAcoounts'

const Catergory = () => {
  const [specialBtnShow, setSpecialBtnShow] = useState(false);
  const [generalBtnShow, setGeneralBtnShow] = useState(true);

  return (
    <div id="catergory">
      <div className="d-flex justify-content-between align-items-center">
        <p className="title-5">
          <FaTag className="me-2" /> Category
        </p>
        <div>
          <button
            onClick={() => {
              setSpecialBtnShow(true);
              setGeneralBtnShow(false);
            }}
            className={`${
              specialBtnShow
                ? "special-skilled-btn selected"
                : "special-skilled-btn not-selected"
            }`}
          >
            Special Skilled
          </button>
          <button
            onClick={() => {
              setSpecialBtnShow(false);
              setGeneralBtnShow(true);
            }}
            className={`${
              generalBtnShow
                ? "generel-btn selected"
                : "generel-btn not-selected"
            }`}
          >
            General
          </button>
        </div>
      </div>
      {specialBtnShow && <SpecialCategories />}
      {generalBtnShow && <GeneralCategories />}
      <OpenAccounts />
    </div>
  );
}

export default Catergory