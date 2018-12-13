import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import BackgroundImage from '../components/BackgroundImage'
import { dateFormatted } from '../util/date'
import { getImageSrc } from '../util/getImageUrl'
import './SingleWork.css'

export default ({ fields, nextPostURL, prevPostURL }) => {
  const { title, date, subtitle, problem, solution, galleryImages = [], thumbnail, body, categories = [] } = fields
  return (
    <article className='SinglePost'>
     <div className='SingleWork--Header' style={{backgroundImage: `url(${thumbnail})`}}>
     <div className='container'>
      <Link className='SinglePost--BackButton' to='/portfolio/'>
          <ChevronLeft /> Back
        </Link>
        <div className='SingleWork--Title'>
        <div className="dot-section">
        <div className="dot-header">{title && <h1 className='SingleWork--Title'>{title}</h1>}</div>
        {subtitle}
        </div>
        <a href="#" className='Button'>VIEW WEBSITE</a></div>
        </div>
        
    </div>
    <div className="container skinny">
    <div className="dot-section">
      <h2 className="dot-header">Problem</h2>
      <Content source={problem}/>
    </div>   
    </div>
    <div className="container skinny">
    <div className="dot-section">
      <h2 className="dot-header">Solution</h2>
      <div className="portfolio-gallery">
      {!!galleryImages.length &&
              galleryImages.map(obj => (
                <div key={obj.image} className='GalleryItem'>
                <a className="ItemImage" href={obj.image}><img src={getImageSrc(obj.image, 300)}/><br/>                </a>
                <span className="ItemCaption">{obj.caption}</span><br/>
                <a className="Button" href={obj.btnlink}>{obj.btntext}</a>
                </div>
              ))}
      </div>
      <Content source={solution}/>
    </div>   
    </div>
    <div className="container">
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
