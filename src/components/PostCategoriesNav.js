import React from 'react'
import { NavLink } from 'react-router-dom'

import { slugify } from '../util/url'
import './PostCategoriesNav.css'

const PostCategoriesNav = ({ categories }) => (
  <div className='container'>
    <div className='PostCategoriesNav'>
      <NavLink className='CatLink' exact to={`/blog/`}>
        All
      </NavLink>
      {categories.map((category, index) => (
        <NavLink
          className='CatLink'
          key={category.title + index}
          to={`/blog/category/${slugify(category.title)}/`}
        >
          {category.title}
        </NavLink>
      ))}
    </div>
  </div>
)

export default PostCategoriesNav
