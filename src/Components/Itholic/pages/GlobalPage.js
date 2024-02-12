import React from 'react';
import ButtonGroup from '../components/ButtonGroup';
import '../assets/styles/GlobalPage.css'; // Import CSS styles
import itholicVideo from '../assets/media/itholic8.mp4'; // Import the video file
import itholicLogo from '../assets/media/images/itholiclogo2.png'; 
import AboutEvent from '../components/AboutEvent';
import Schedule from '../components/Schedule';
import Footer from '../../Footer/Footer';
import Navbar from '../../Header/Navbar';

function GlobalPage() {
  return (
    <div className="global-page">
      <Navbar />
      <div className='hero'>
        <video autoPlay loop muted className="background-video">
          <source src={itholicVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          {/* <h1 className="titleGlobal">It holic</h1> */}
          <img src={itholicLogo} alt="Description of the itholic logo" width={900} />
          <p className='titleGlobal-desc'>GRAND AMPHI, ENSIAS. 01-03 MARS 2024</p>
          <ButtonGroup />
        </div>
      </div>
      <div>
        <AboutEvent />
      </div>
      <div>
        <Schedule />
      </div>
      <Footer />
    </div>
  );
}

export default GlobalPage;
