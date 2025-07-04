import React from 'react'
import logo from "../assets/logo.jpg"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            className="mx-2"
            width={50}
            height={33}
            src={logo}
            alt="Workflow"
          />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/chetangudigar"
          target="blank"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/chetanh2"
          target="blank"
          aria-label="Github"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}

export default Navbar