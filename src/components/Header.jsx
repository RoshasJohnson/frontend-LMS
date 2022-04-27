import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className='header'>
          <h1>
              Libarary
          </h1>
          <Link to="login"><button className='addBook btn btn-primary'> Add Book</button></Link>
      </div>

    </div>
  )
}

export default Header
