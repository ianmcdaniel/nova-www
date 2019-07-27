import React from 'react'
import { Link } from 'gatsby'


export default () => (
  <nav role="navigation">
    <ul className="navigation">
      <li className="navigationItem">
        <Link to="/">Home</Link>
      </li>
      <li className="navigationItem">
        <Link to="/resources/">Resources</Link>
      </li>
    </ul>
  </nav>
)
