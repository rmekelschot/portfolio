import React from 'react'
import './about.css'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>
      Get to know
      </h5>
      <h2>
      About Me
      </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={''} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Ervaring</h5>
              <small>top 5% (PHP)</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Onderwijs</h5>
              <small>MBO niveau 4</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projecten</h5>
              <small>20+ Voltooid</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, delectus dolorum esse beatae voluptate necessitatibus, expedita quo, molestiae doloribus dignissimos atque quasi minima quam deleniti laboriosam perferendis perspiciatis tempore voluptatibus.</p>
          <a href="/#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About