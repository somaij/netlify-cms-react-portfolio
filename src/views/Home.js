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
    <div className="masthead relative">
    {featuredImage && (
        <BackgroundImage src={featuredImage} opacity={0.4} />
      )}
    <div className="container">
    <div className="content">
    <div className="left">
    <h1>{title}</h1>
    <div className="sub1">{subtitle}</div>
    <div className="sub2">test</div>
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
