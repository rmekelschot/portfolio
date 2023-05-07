import React from 'react'
import './header.css'
import HeaderButtons from './HeaderButtons'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mitchell Ekelschot</h1>
        <h5 className="text-light">Full stack developer</h5>
        <HeaderButtons/>
        <HeaderSocials />

        <div className="me">
          <img src={''} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>
          Scroll Down
        </a>

      </div>
    </header>
  )
}

export default Header