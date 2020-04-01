import React from 'react';
import { Link } from 'gatsby';
import { string, arrayOf, shape } from 'prop-types';
import './categoryList.scss';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map(category => (
        <div key={category.slug} className="category-list__item">
          <Link
            to={`/categories/${category.slug}/`}
            className="category-list__link"
          >
            {category.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

CategoryList.propTypes = {
  categories: arrayOf(
    shape({
      title: string,
      slug: string,
    })
  ),
};

export default CategoryList;
