import React from 'react';
import '../assets/styles/AboutEvent.css'; // Import CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import CardNeon from './CardNeon';

function AboutEvent() {
  return (
    <div class="event">
        <div className='AboutEventheader'>
          <h1 className='AboutEventTitle h-underline-6'>About the Event</h1>
          <p>ITHOLIC: Forget just "tech," prepare for an immersive experience! Dive deep into the future with ITHOLUC, a 3-day event, packed with conferences, workshops, competitions, and more, all revolving around a cutting-edge theme. Best part? It's by students, for students, so get ready to connect, learn, and shape the future of tech, together!</p>
        </div>
        <div className='CardGroup row'>
          <div className='col-md-3'>
          <CardNeon title="+10" title2="Speackers"/>
          </div>
          <div className='col-md-3'>
          <CardNeon title="3" title2="Days"/>
          </div>
          <div className='col-md-3'>
          <CardNeon title="+6" title2="Prices"/>
          </div>
          <div className='col-md-3'>
          <CardNeon title="+40" title2="Teams"/>
          </div>
        </div>
    </div>

  );
}

export default AboutEvent;
