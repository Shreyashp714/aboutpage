import React, { useState } from 'react';
import './FAQ.css';
import FAQImage from './FAQImage';
import FAQHeading from './FAQHeading';
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the dropdown
  };

  return (
    <div className='faq-container'>
<div className="faq-wrapper">
        <FAQImage></FAQImage>
        <div className="faq-section">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-dropdown">
        {[1, 2, 3, 4].map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleDropdown(index)}
            >
              Question {item}
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>This is the answer to Question {item}.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default FAQ;
