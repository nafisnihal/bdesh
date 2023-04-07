import React from 'react'
import CategoryButton from "./CategoryButton";
import { specialCategories } from "../assets/api/specialCategoriesdata";

const SpecialCategories = () => {
  return (
    <div className="row my-2">
      {specialCategories.map(
        ({ name = "", image = image, href = href, id = id }) => (
          <div className="col-md-4">
            <CategoryButton name={name} image={image} href={href} key={id} />
          </div>
        )
      )}
    </div>
  );
}

export default SpecialCategories