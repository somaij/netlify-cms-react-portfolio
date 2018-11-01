import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import BackgroundImage from '../components/BackgroundImage'
import { dateFormatted } from '../util/date'
import './SingleWork.css'

export default ({ fields, nextPostURL, prevPostURL }) => {
  const { title, date, thumbnail, body, categories = [] } = fields
  return (
    <article className='SinglePost section light'>
     <div className='SingleWork--Header' style={{backgroundImage: `url(${thumbnail})`}}>
     <div className='container skinny'>
      <Link className='SinglePost--BackButton' to='/blog/'>
          <ChevronLeft /> Back
        </Link>
        <div className='SingleWork--Title'>{title && <h1 className='SingleWork--Title'>{title}</h1>}<a href="#" className='Button'>VIEW WEBSITE</a></div>
        </div>
      </div>
      <div className='container skinny'>
 
        
       
        <div className='SinglePost--Content relative'>       

          <div className='SinglePost--InnerContent'>
            <Content source={body} />
          </div>

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
      </div>
    </article>
  )
}
