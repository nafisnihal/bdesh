import React from 'react'
import FindJob from './FindJob'
import Carousel from './Carousel'
import CountryCategory from './CountryCategory'

const Hero = () => {
  return (
    <div className='bg-primary'>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <FindJob />
          </div>
          <div className="col-sm-12 col-md-6">
            <Carousel />
          </div>
          <div className="col-sm-12 col-md-3">
            <CountryCategory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero