import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default ({ globalSettings, socialSettings, navLinks}) => (
  <footer className='Footer'>
    <div className='container'>
    <div className="left">
    <div className='Logo'><strong>Jason</strong> Somai</div>
    <div className="link-list">
    <ul>
      <li><a href="https://github.com/somaij/">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/jason-somai-40a29252/">LinkedIn</a></li>
      <li><a href="https://www.instagram.com/jasonsomai/">Instagram</a></li>
    </ul>
    </div>
    </div>
    <div className="right">
      <div className="cols">
      <div className="col col1">
      <Link to='/portfolio/'><h3>Portfolio</h3></Link>
      </div>
      <div className="col col2">
      <Link to='/blog/'><h3>Recent Posts</h3></Link>
      </div>
      </div>
      <div className="cols-under"><small><a href="https://github.com/Jinksi/netlify-cms-react-starter">Netlify CMS & React starter project created by Jinksi</a></small></div>
    </div>
    
    </div>
  </footer>
)