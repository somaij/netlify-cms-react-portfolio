import React from 'react'
import _sortBy from 'lodash/sortBy'

import PageHeader from '../components/PageHeader'
import WorkSection from '../components/WorkSection'

import './Portfolio.css'

export default ({
  fields,
  works = [],
  showFeatured = true
}) => {
  const { title, subtitle, featuredImage } = fields
  works = _sortBy(works, ['date']).reverse()

  return (
    <main className='Portfolio'>
    <div className='container'>
        <div className="dot-section">
        <h1 className="dot-header">{title}</h1>
        <p>{subtitle}</p>
        </div>
    </div>

      <div class="container section">{!!works.length && <WorkSection works={works} />}</div>
    </main>
  )
}
