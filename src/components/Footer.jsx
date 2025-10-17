import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="#" aria-label="GitHub">GitHub</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Twitter">Twitter</a>
          <a href="https://www.instagram.com/arjun__rdy_00?igsh=ZHp1ejBmejg5bTds" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
        </div>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
