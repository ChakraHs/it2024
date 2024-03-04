import React, { useState, useEffect } from 'react';
import ButtonGroup from '../components/ButtonGroup';
import '../assets/styles/GlobalPage.css';
import itholicVideo from '../assets/media/itholic8.mp4';
import itholicLogo from '../assets/media/images/ITHOLIC.png';
import AboutEvent from '../components/AboutEvent';
import Schedule from '../components/Schedule';
import Footer from '../../Footer/Footer';
import Navbar from '../../Header/Navbar';
import Speakers from '../components/SPEAKERS/Speakers';
import Sponsors from '../components/SPONSORS/Sponsors';

function Itholic() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Change the timeout value as needed

    return () => clearTimeout(timer);
  }, []); // Run useEffect only once on component mount

  return (
    <div>
    <div className="global-page">
      <div className={`loader-container ${isLoading ? '' : 'hidden'}`}>
        <div className="loader"></div> {/* Conditionally show loader */}
      </div>
          <Navbar />
          <div className='hero'>
            <video autoPlay loop muted className="background-video">
              <source src={itholicVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="content">
              <img className='imgG' src={itholicLogo} alt="ITHOLIC logo" />
              {/* <div className='images row container d-flex w-100 justify-content-center'>
                <img className='imgG imgG1' src={itholicLogo1} alt="ITHOLIC logo" />
                <img className='imgG imgG2' src={itholicLogo2} alt="ITHOLIC logo" />
                <img className='imgG imgG3' src={itholicLogo3} alt="ITHOLIC logo" />
              </div> */}
              <p className='titleGlobal-desc'>GRAND AMPHI - ENSIAS | 01 TO 03 MARCH 2024</p>
              <ButtonGroup />
            </div>
          </div>
          <AboutEvent />
          <Schedule />
          {/* <Speakers /> */}
          <Sponsors />
    </div>
    <Footer />
    </div>
  );

}

export default Itholic;
