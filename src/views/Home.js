import React from 'react'
import _sortBy from 'lodash/sortBy'
import Content from '../components/Content'
import PageHeader from '../components/PageHeader'
import PostSection from '../components/PostSection'
import WorkSection from '../components/WorkSection'
import './Home.css'

export default ({ fields, posts = [], postCategories = [], works = [] }) => {
  const { title, subtitle, featuredImage, body, ctaTitle, ctaText } = fields
  posts = _sortBy(posts, ['date']).reverse()
  works = _sortBy(works, ['date']).reverse()

  return (
    <main className='Home'>
      <PageHeader
        large
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      <div className='section'>
        <div className='container'>
          <Content source={body} />
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
