import React, { useEffect, useState } from 'react';
import ButtonGroup from '../components/ButtonGroup';
import '../assets/styles/GlobalPage.css'; // Import CSS styles
import itholicVideo from '../assets/media/itholic8.mp4'; // Import the video file
import itholicLogo from '../assets/media/images/ITHOLIC.png'; 
import AboutEvent from '../components/AboutEvent';
import Schedule from '../components/Schedule';
import Footer from '../../Footer/Footer';
import Navbar from '../../Header/Navbar';
import Speakers from '../components/SPEAKERS/Speakers';

function GlobalPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="global-page">
      {isLoading ? (
        <span class="loader"></span>
      ) : (
        <>
      <Navbar />
      <div className='hero'>
        <video autoPlay loop muted className="background-video">
          <source src={itholicVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          {/* <h1 className="titleGlobal">It holic</h1> */}
          <img className='imgG' src={itholicLogo} alt="Description of the itholic logo"/>
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
      <div>
        <Speakers />
      </div>
      <Footer />
      </>
      )}
    </div>
  );
}

export default GlobalPage;
