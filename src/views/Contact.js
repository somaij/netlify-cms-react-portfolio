import React from 'react'
import { MapPin, Smartphone, Mail, Linkedin } from 'react-feather'

import PageHeader from '../components/PageHeader'
import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import Content from '../components/Content'
import { getImageSrc } from '../util/getImageUrl'
import './Contact.css'

export default ({ fields }) => {
  const {title, subtitle } = fields
  return (
    <div className='Contact'>
     <div className='container'>
        <div className="dot-section">
        <h1 className="dot-header">{title}</h1>
        <p>{subtitle}</p>
        </div>
    </div>

      <div className='section Contact--Section1'>
        <div className='container Contact--Section1--Container'>
        <div>
          <h2>Email Me!</h2>
            <EnquiryFormSimpleAjax name='Simple Form Ajax' />
        </div>
          <div>
            <h2>Social Me!</h2>
            <h3 className="social-link"><a href="https://www.linkedin.com/in/jason-somai-40a29252/"><img src={getImageSrc('/images/uploads/linkedin.png', 28)}/>LinkedIn</a></h3>
            <h3 className="social-link"><a href="https://www.instagram.com/jasonsomai/"><img src={getImageSrc('/images/uploads/instagram.png', 28)}/>Instagram</a></h3>
<script src="https://instawidget.net/js/instawidget.js?u=e5efb1c7b2c052f62c461dd7c1c43b1b3f13d234432d95eee2ddfde4bc94a88e&width=300px"></script>
          </div>


        </div>
      </div>
    </div>
  )
}
