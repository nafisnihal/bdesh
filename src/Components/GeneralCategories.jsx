import React from 'react'
import CategoryButton from './CategoryButton'
import { generalCategories } from "../assets/api/generalCategoriesData.js";

const GeneralCategories = () => {
  return (
    <div className="row my-2">
      {generalCategories.map(({name = "", image=image, href=href, id=id}) => (
        <div className="col-md-4">
          <CategoryButton name={name} image={image} href={href} key={id} />
        </div>
      ))}
    </div>
  );
}

export default GeneralCategories