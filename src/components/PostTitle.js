import React from 'react'
import { Link } from 'react-router-dom'

import { slugify } from '../util/url'


const PostTitle = ({ postItem, className = '', ...props }) => (
  <Link
    to={slugify(`/blog/${postItem.title}/`)}
    className={`PostTitle ${className}`}
    {...props}
  >
  {postItem.title && <h4 className='PostCard--Title'>{postItem.title}</h4>}
  </Link>
)

export default PostTitle
