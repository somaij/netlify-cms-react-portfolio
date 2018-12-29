import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import BackgroundImage from '../components/BackgroundImage'
import { dateFormatted } from '../util/date'
import { getImageSrc } from '../util/getImageUrl'
import './SinglePost.css'

export default ({ fields, nextPostURL, prevPostURL }) => {
  const { title, date, postFeaturedImage, body, categories = [] } = fields
  return (
    <article className='SinglePost'>
    <div className='SinglePost--Header test' style={{backgroundImage: `url(${postFeaturedImage})`}}>
    <div className='container'>
      <Link className='SinglePost--BackButton' to='/blog/'>
          <ChevronLeft /> Blog
      </Link>
      <div className='SinglePost--Title'>
        <div className="dot-section">
          <div className="dot-header">
            {title && <h1 className='SingleWork--Title'>{title}</h1>}
          </div>
          <div className='SinglePost--Meta'>
          {date && (
              <div className='SinglePost--Meta--Date'>{dateFormatted(date)}</div>
            )}

            {!!categories.length &&
              categories.map(obj => (
                <div key={obj.category} className='SinglePost--Meta--Category'>
                  {obj.category}
                </div>
              ))}
            
          </div>
        </div>
      </div>
    </div>
        
    </div>

      <div className='container skinny'>
      <Content source={body} />
      <div className='SinglePost--Pagination'>
            {prevPostURL && (
              <Link
                className='SinglePost--Pagination--Link prev'
                to={prevPostURL}
              >
                Previous Post
              </Link>
            )}
            {nextPostURL && (
              <Link
                className='SinglePost--Pagination--Link next'
                to={nextPostURL}
              >
                Next Post
              </Link>
            )}
          </div>
      </div>
    </article>
  )
}
