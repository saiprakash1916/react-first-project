import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <Link className="navbar-brand" href="to">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="to">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="to">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="to">Pricing</Link>
            </li>
           
          </ul>
        </div>
      </nav>
        </div>
    )
}

export default Header
