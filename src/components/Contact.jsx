import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's work together</h3>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
          <div className="contact-details">
            <div className="detail-item">
              <span className="icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>n.arjunreddy893297@gmail.com</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="icon">📱</span>
              <div>
                <h4>Phone</h4>
                <p>+91 8074943694</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Hyderabad,Telangana,India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
