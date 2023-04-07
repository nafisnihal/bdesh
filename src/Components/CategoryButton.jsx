import React from "react";
import "../styles/CategoryButton.scss"

const CategoryButton = ({name, image, href}) => {
  return (
    <div className="mt-3">
      <a href={href} className="category-btn-title">
        <div className="d-flex align-items-center category-btn">
          <div>
            <img src={image} alt="" />
          </div>
          <div className="ms-3">
            <p className="m-0">{name}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CategoryButton;
