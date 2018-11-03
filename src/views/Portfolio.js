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
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      {!!works.length && <WorkSection works={works} />}
    </main>
  )
}
