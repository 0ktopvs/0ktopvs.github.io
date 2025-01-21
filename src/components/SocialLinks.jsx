import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/gennaro-sigillo" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={40} />
      </a>
      <a href="mailto:gennarosigillo13@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope size={40} />
      </a>
      <a href="https://github.com/tuo-nome" target="_blank" rel="noopener noreferrer">
        <FaGithub size={40} />
      </a>
    </div>
  );
};

export default SocialLinks;
