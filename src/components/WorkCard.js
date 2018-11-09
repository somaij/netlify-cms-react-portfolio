import React from 'react'
import { Link } from 'react-router-dom'

import { slugify } from '../util/url'
import BackgroundImage from './BackgroundImage'
import './WorkCard.css'

const WorkCard = ({ postItem, className = '', ...props }) => (
  <Link
    to={slugify(`/portfolio/${postItem.title}/`)}
    className={`WorkCard ${className}`}
    {...props}
    style={{
      backgroundColor:'#341232'
    }}
  >
    {postItem.thumbnail && (
      <div className='WorkCard--Image relative'>
        <BackgroundImage
          src={postItem.thumbnail}
          alt={postItem.title}
        />
      </div>
    )}

    <div className='WorkCard--Content'>
      {postItem.title && <h3>2018</h3>}
      {postItem.title}
      {postItem.excerpt && (
        <div className='WorkCard--Excerpt'>
          {postItem.excerpt.length > 160
            ? postItem.excerpt.slice(0, 157) + '...'
            : postItem.excerpt}
        </div>
      )}
    </div>
  </Link>
)

export default WorkCard
