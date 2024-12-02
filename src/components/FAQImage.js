import React from 'react';
import './FAQImage.css';
import thinking from '../assets/thinking.png';

const FAQImage = () => {
  return (
    <div className="faq-image-container">
      <img src={thinking} alt="Thinking" className="thinking-image" />
    </div>
  );
};

export default FAQImage;
