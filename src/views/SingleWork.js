import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import BackgroundImage from '../components/BackgroundImage'
import { dateFormatted } from '../util/date'
import './SingleWork.css'

export default ({ fields, nextWorkURL, prevWorkURL }) => {
  const { title, date, workFeaturedImage, body, categories = [] } = fields
  return (
    <article className='SingleWork section light'>
      {workFeaturedImage && (
        <BackgroundImage
          className='SingleWork--BackgroundImage'
          src={workFeaturedImage}
          alt={title}
        />
      )}

      <div className='container skinny'>
        <Link className='SingleWork--BackButton' to='/blog/'>
          <ChevronLeft /> BACK
        </Link>
        <div className='SingleWork--Content relative'>
          <div className='SingleWork--Meta'>
            {!!categories.length &&
              categories.map(obj => (
                <span key={obj.category} className='SingleWork--Meta--Category'>
                  {obj.category}
                </span>
              ))}
            {date && (
              <span className='SingleWork--Meta--Date'>
                {dateFormatted(date)}
              </span>
            )}
          </div>

          {title && <h1 className='SingleWork--Title'>{title}</h1>}

          <div className='SingleWork--InnerContent'>
            <Content source={body} />
          </div>

          <div className='SingleWork--Pagination'>
            {prevWorkURL && (
              <Link
                className='SingleWork--Pagination--Link prev'
                to={prevWorkURL}
              >
                Previous Work
              </Link>
            )}
            {nextWorkURL && (
              <Link
                className='SingleWork--Pagination--Link next'
                to={nextWorkURL}
              >
                Next Work
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
