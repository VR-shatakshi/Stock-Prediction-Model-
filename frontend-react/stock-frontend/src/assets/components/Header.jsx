import React from 'react'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand  bg-dark px-3">
     <a className="navbar-brand" href="">Stock-Prediction Portal</a>

    <div className="ms-auto">
    <a className="btn btn-outline-info me-2 rounded" href="">Login</a>
    <a className="btn btn-info rounded" href="">Register</a>
    </div>
   </nav>

    </>
  )
}

export default Header




