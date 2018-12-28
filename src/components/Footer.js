import React from 'react'

import './Footer.css'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <footer className='Footer'>
    <div className='container'>
    <div class="left">
    <div className='Logo'><strong>Jason</strong> Somai</div>
    <div class="link-list">
    <ul>
      <li><a href="https://github.com/somaij/">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/jason-somai-40a29252/">LinkedIn</a></li>
      <li><a href="https://www.instagram.com/jasonsomai/">Instagram</a></li>
    </ul>
    </div>
    </div>
    <div class="right">
      <div class="col col1">
      <h3>Portfolio</h3>
      </div>
      <div class="col col2">
      <h3>Recent Posts</h3>
      </div>
    </div>
    </div>
  </footer>
)
