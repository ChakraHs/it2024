import React from 'react';
import '../assets/styles/cardNeon.css'; // Import CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';

function CardNeon(props) {
  return (
    <div class="cardNeon">
      <div class="content">
          <div class="back">
          <div class="back-content">
              <strong className='cardTitle'>{props.title}</strong>
              <strong className='cardTitle2'>{props.title2}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardNeon;
