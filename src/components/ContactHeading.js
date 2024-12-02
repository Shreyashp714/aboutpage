import React from 'react';
import './ContactHeading.css';
import callImage from '../assets/call.png'; // Ensure the image is saved in the assets folder

const ContactHeading = () => {
  return (
    <div className="contact-section">
      <div className="contact-heading">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-content">
        <p>
          Want to get in touch? We’d love to hear from you. Here’s how you can reach us.....
        </p>
      </div>
      <div className="contact-image">
        <img src={callImage} alt="Call Center" />
      </div>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <p>just pick up the phone to communicate with our expert.</p>
          <h3>+91 324xxxxx42</h3>
        </div>
        <div className="contact-card">
          <div className="contact-icon">📧</div>
          <p>Email us to start a conversation with one of our team members.</p>
          <h3>abc.somiya.edu</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactHeading;
