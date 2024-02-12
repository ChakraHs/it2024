import React from 'react';
import '../assets/styles/AboutEvent.css'; // Import CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import CardNeon from './CardNeon';

function AboutEvent() {
  return (
    <div class="event">
        <h1 className='AboutEventTitle'>About the Event</h1>
        <div className='CardGroup row'>
            <CardNeon className="col-md-4" title="5 Speakers"/>
            <CardNeon className="col-md-4" title="32 Hours"/>
            <CardNeon className="col-md-4" title="3< prix"/>
        </div>
    </div>

  );
}

export default AboutEvent;
