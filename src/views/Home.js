import React from 'react'
import _sortBy from 'lodash/sortBy'
import Content from '../components/Content'
import BackgroundImage from '../components/BackgroundImage'
import PostSection from '../components/PostSection'
import WorkSection from '../components/WorkSection'
import './Home.css'

export default ({ fields, posts = [], postCategories = [], works = [] }) => {
  const { title, subtitle, featuredImage, body, ctaTitle, ctaText } = fields
  posts = _sortBy(posts, ['date']).reverse()
  works = _sortBy(works, ['date']).reverse()

  return (
    <main className='Home'>
    <div className="masthead relative" id="header">
    <div className="container">
    <div className="content">
    <div className="left">
    <div class="roles">
    <div className="dot-section sub1">
        <h1 className="dot-header">UX</h1>
System Analysis<br/>
Wireframing<br/>
UI Design<br/>
Axure & Adobe XD
    </div>
    <div className="dot-section sub2">
        <h1 className="dot-header">Developer</h1>
        HTML & SASS <br/> WordPress & PHP<br/>
JQuery<br/>
Shopify Liquid<br/>
Email Marketing<br/>
    </div>
    </div>
    </div>
    <div className="right">
    <h2>Let's Connect</h2>
    <a href="/contact" className="Button Button--inverted">CONTACT ME</a>
    </div>
    </div>
    </div>
    </div>
      <div className='container'>
        <div className="dot-section">
        <h2 className="dot-header">Work</h2>
        {!!works.length && <WorkSection works={works} />}
        </div>
      </div>

      <div className='container'>
        <div className="dot-section">
        <h2 className="dot-header">Blog</h2>
        {!!posts.length && <PostSection posts={posts} />}
        </div>
      </div>
      
      <div className='cta'>
        <div className='container'>
          <h2>{ctaTitle}</h2>
          <p>{ctaText}</p>
          <a href="/contact" className="Button Button--inverted">CONTACT ME</a>
        </div>
      </div>
    </main>
  )
}
