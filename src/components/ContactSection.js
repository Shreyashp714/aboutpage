import React from 'react';
import './ContactSection.css';
import callImage from '../assets/call.png'; // Make sure the image is in your assets folder

const ContactSection = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Left Grey Border/Space */}
        <div className="grey-space left-space"></div>

        {/* Main Content */}
        <div className="contact-main">
          {/* Heading and Subheading */}
          <div className="contact-heading">
            <h1>Get in Touch</h1>
            <p>
              Want to get in touch? We’d love to hear from you. Here’s how you can reach us.....
            </p>
          </div>

          {/* Contact Cards */}
          <div className="contact-cards">
            {/* Card 1 */}
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <p>Just pick up the phone to communicate with our expert.</p>
              <h3>+91 324xxxxx42</h3>
            </div>

            {/* Card 2 */}
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <p>Email us to start a conversation with one of our team members.</p>
              <h3>abc@somiya.edu</h3>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="contact-image">
          <img src={callImage} alt="Call Center" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
