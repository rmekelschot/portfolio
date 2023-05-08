import React from 'react'
import './about.css'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

import ABOUTME from '../../assets/about-me3.png'

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
            <img src={ABOUTME} alt="About Me" />
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
          <p>In 2018 heb ik mij ingeschreven bij het Grafish Lyceum in Utrecht, waar ik veel heb geleerd over web development, zowel front-end als back-end. Tijdens deze opleiding heb ik stage gelopen bij het bedrijf 'Refresh Media' waar ik onder andere het CMS van CI3 naar CI4 heb omgezet, en een nieuwe betalingsmethode voor het bedrijf heb geimplementeerd.</p>
          <p>Daarna heb ik mij ingeschreven bij de 'Haagse Hogeschool'. Tijdens mijn studie aan de Haagse Hogeschool heb ik een opdracht van het bedrijf 'BetaBit' gekregen. Ik moest een applicatie ontwikkelen voor de mobiel waar werknemers hun co2 uitstoot konden bijhouden. Wie aan het eind van de week de minste uitstoot had werd beloond met punten. Waarvoor ik de prijs 'Meest creatieve oplossing' heb gewonnen.</p>
          <p>Naast opleidingen en stages heb ik hobbymatig een linux server opgezet en ingericht (denk hierbij aan ssh, samba, apache en myslq). Ook behoor ik volgens de linkedin evaluatie in de top 5% van PHP kennis.</p>
          <p>In mijn vrije tijd ben ik graag in de natuur, of in de sportschool. Ik ben graag aan het klimmen, het vissen, aan het tuinieren of aan het hiken</p>
          <a href="/#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About