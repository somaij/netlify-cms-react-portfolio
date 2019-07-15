import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import BackgroundImage from '../components/BackgroundImage'
import { dateFormatted } from '../util/date'
import { getImageSrc } from '../util/getImageUrl'
import './SingleWork.css'

export default ({ fields, nextPostURL, prevPostURL }) => {
  const { title, date, subtitle, link, thumbnail, problem, solution, ctaTitle, ctaText, galleryImages = [], headerimage, body, categories = [], workContent = [] } = fields
  return (
    <article className='SinglePost'>
    <Helmet>
    {thumbnail && (
        <meta property='og:image' content={thumbnail} />
      )}
    </Helmet>
     <div className='SingleWork--Header' style={{backgroundImage: `url(${headerimage})`}}>
     <div className='container'>
      <div className='top'><Link className='SinglePost--BackButton' to='/portfolio/'>
          <ChevronLeft /> Portfolio
        </Link>
        <a href={link} className='Button'>VIEW WEBSITE</a></div>
      
        <div className='SingleWork--Title'>
        <div className="dot-section">
        <div className="dot-header">{title && <h1 className='SingleWork--Title'>{title}</h1>}</div>
        {subtitle}
        </div>
        </div>
        
        </div>
        
    </div>
    <div className="gallery-wrap">
    <div className="container">
    <div className="dot-section">
        <div className="dot-header"><h2>At a Glance</h2></div>
        <div className="portfolio-gallery">
      {!!galleryImages.length &&
              galleryImages.map(obj => (
                <div key={obj.image} className='GalleryItem'>
                <a className="ItemImage" href={obj.image} data-lity data-lity-desc={obj.caption}><img src={getImageSrc(obj.image, 300)}/></a>
                <div className="ItemCaption">{obj.caption}</div>
                <a href={obj.btnlink}>{obj.btntext}</a>
                </div>
              ))}
      </div>
        </div>
    </div>
    </div>
    <div className="container skinny">
    <div className="dot-section">
      <h2 className="dot-header">Problem</h2>
      <Content source={problem}/>
    </div>   
    </div>
    {!!workContent.length &&
              workContent.map(obj => (
                <div className="container skinny">
    <div className="dot-section">
      <h2 className="dot-header">{obj.sectionTitle}</h2>
      <Content source={obj.sectionText}/>
    </div>   
    </div>
              ))}
    
    <div className="container skinny">
    <div className="dot-section">
      <h2 className="dot-header">End Result</h2>
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
    <div className='cta'>
        <div className='container'>
          <h2>{ctaTitle}</h2>
          <p>{ctaText}</p>
          <a href="/contact" className="Button Button--inverted">CONTACT ME</a>
        </div>
      </div>
    </article>
    
  )
}
