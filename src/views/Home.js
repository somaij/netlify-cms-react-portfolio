import React from 'react'
import _sortBy from 'lodash/sortBy'
import Content from '../components/Content'
import PageHeader from '../components/PageHeader'
import PostCategoriesNav from '../components/PostCategoriesNav'
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
      
      <div className='cta'>
        <div className='container'>
          <h2><Content source={ctaTitle} /></h2>
          <p><Content source={ctaText} /></p>
          <a href="/contact">CONTACT ME</a>
        </div>
      </div>
      {!!postCategories.length && (
        <PostCategoriesNav categories={postCategories} />
      )}
      {!!posts.length && <PostSection posts={posts} />}
      {!!works.length && <WorkSection works={works} />}
    </main>
  )
}
