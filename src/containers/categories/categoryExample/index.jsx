import React from 'react';
import { Link } from 'react-router-dom';

 const CategoryItem = ({title, url, children}) => (
  <div className="category-example-detail">
    <div className="category-example__header ">
      <h2>{ title }</h2>
      <Link to={url} >
        Показати всі { title }
      </Link>
    </div>
    <div className="category-example__thumbnail">
      { children }
    </div>
  </div>
)

export default CategoryItem;