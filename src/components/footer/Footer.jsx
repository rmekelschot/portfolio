import React from "react";
import "./footer.css";

import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        RME
      </a>

      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li><a href="#services">Services</a></li> */}
        <li>
          <a href="#projects">Projects</a>
        </li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/mitchell-ekelschot-204248271/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/rmekelschot"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; RM Ekelschot. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
