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
      backgroundColor:'#' + postItem.hex
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
      <strong>{postItem.year}</strong>
      {postItem.title}<br/>
      {postItem.shortdesc}
    </div>
  </Link>
)

export default WorkCard
