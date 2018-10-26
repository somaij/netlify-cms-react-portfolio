import React from 'react'

import Content from '../components/Content'
import PageHeader from '../components/PageHeader'
import './Home.css'

export default ({ fields }) => {
  const { title, subtitle, featuredImage, body, ctaTitle, ctaText } = fields
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
    </main>
  )
}
