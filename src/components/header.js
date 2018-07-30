import React from 'react'
import { Link } from 'gatsby'
import linkedin_icon from '../images/linkedin-Icon.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      position: 'sticky',
      background: '#444',
      marginBottom: '1.45rem',
    }}
  >
    <div
      className='header'
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h2 style={{ margin: 0, font: 'monospace' }}>
        <a
          href="https://www.github.com/viv-r/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          PROJECTS
        </a>

      </h2>
      <a href='https://www.linkedin.com/in/vivrdy/' className='button linkedin'>
        VIVEK PAGADALA <br />
        {/* <img className='icon' src={linkedin_icon} /> */}
      </a>
    </div>
  </div >
)

export default Header
