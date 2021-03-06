import React from 'react'
import _sortBy from 'lodash/sortBy'

import PageHeader from '../components/PageHeader'
import PostCategoriesNav from '../components/PostCategoriesNav'
import PostSection from '../components/PostSection'

import './Blog.css'

export default ({
  fields,
  posts = [],
  postCategories = [],
  showFeatured = true
}) => {
  const { title, subtitle, featuredImage } = fields
  posts = _sortBy(posts, ['date']).reverse()

  return (
    <main className='Blog'>
    <div className='container'>
        <div className="dot-section">
        <h1 className="dot-header">{title}</h1>
        <p>{subtitle}</p>
        </div>
    </div>

      

      <div class="container post-section">
      <div class="posts">{!!posts.length && <PostSection posts={posts} />}</div>
      <div class="post-categories">
      <h2>Categories</h2>
      {!!postCategories.length && (
        <PostCategoriesNav categories={postCategories} />
      )}
      </div>
      </div>
    </main>
  )
}
