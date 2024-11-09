import React from 'react';
import './style.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact</h1>
      </div>
      <div className="contact-description">
        <p>
          I am currently seeking employment, so if you have a job or project offer, or if you need more information, please do not hesitate to contact me.
        </p>
      </div>
      
      <div className="social-links">
        <a href="https://github.com/MHassaanQureshi" target="_blank" rel="noopener noreferrer">
          <img src="images/github-sign (1).png" alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-hassaan-qureshi-2202a9257/" target="_blank" rel="noopener noreferrer">
          <img src="images/linkedin (1).png" alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://www.facebook.com/hassaan.haroon.568?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <img src="images/facebook.png" alt="Facebook" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/muhammad_.hassaan_?igsh=MXFsOHZkNTFlMDd3ZQ==" target="_blank" rel="noopener noreferrer">
          <img src="images/instagram.png" alt="Instagram" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
