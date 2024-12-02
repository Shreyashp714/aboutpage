import React from 'react';
import './travelpolicy.css';
import effectImage from '../assets/effect.png'; // Red effect image
import scholarshipImage from '../assets/scholarship.png'; // New scholarship image

const TravelPolicy = () => {
  return (
    <div className="travel-policy">
        <img src={effectImage} alt="Effect" className="effect-image" />
        
      <div className="policy-text">
        <h2>Travel Policy</h2>
        <p>
          The travel policy for research students and associates establishes a structured process <br></br>
          for requesting approval and managing financial support for travel related to academic and<br></br>
          research activities. To initiate travel, individuals must submit a detailed Travel Request<br></br>
          Form, which includes the purpose, destination, itinerary, budget, and supporting<br>
          </br>
          documentation such as conference invitations or research collaboration letters. This<br></br>
          request requires approval from the supervisor, departmental head, and, if necessary, the<br></br>
          Office of Research and Graduate Studies for international travel or significant funding.
        </p>
        
      </div>
      <div className="policy-images">
        <img src={scholarshipImage} alt="Scholarship" className="scholarship-image" />
      </div>
    </div>
  );
};

export default TravelPolicy;
