import React from 'react'
import Catergory from './Catergory'
import SideCategory from './SideCategory'
import '../styles/MainCatergories.scss'

const MainCatergories = () => {
  return (
    <div id="main-categories">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-9">
            <Catergory />
          </div>
          <div className="col-md-3">
            <SideCategory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCatergories