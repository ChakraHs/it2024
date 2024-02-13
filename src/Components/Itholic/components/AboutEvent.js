import React from 'react';
import '../assets/styles/AboutEvent.css'; // Import CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import CardNeon from './CardNeon';

function AboutEvent() {
  return (
    <div class="event">
        <div className='AboutEventheader'>
          <h1 className='AboutEventTitle h-underline-6'>About the Event</h1>
          <p>description of event</p>
        </div>
        <div className='CardGroup row'>
          <div className='col-md-3'>
          <CardNeon title="+5" title2="Speackers"/>
          </div>
          <div className='col-md-3'>
          <CardNeon title="32" title2="Hours"/>
          </div>
          <div className='col-md-3'>
          <CardNeon title="3<" title2="Prix"/>
          </div>
          <div className='col-md-3'>
          <CardNeon title="ech-chykry" title2="l3adama"/>
          </div>
        </div>
    </div>

  );
}

export default AboutEvent;
