import React from 'react';

 const CategoryItem = ({imgSrc, title}) => (
  <div className="category-item">
    <img src={imgSrc} />
    <div className="background-fon" />
    <h2> {title} </h2>
  </div>
)

export default CategoryItem;