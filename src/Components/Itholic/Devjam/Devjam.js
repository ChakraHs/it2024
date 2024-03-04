import React, { useEffect, useState } from 'react';
import '../assets/styles/GlobalPage.css'; // Import CSS styles
import itholicVideo from '../assets/media/itholic8.mp4'; // Import the video file
import '../assets/styles/AboutEvent.css'; // Import CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';

import pdfFile from '../assets/media/DEVJAM V2.0.pdf'; // Import your PDF file

import Schedule from '../components/Schedule';
import Footer from '../../Footer/Footer';
import Navbar from '../../Header/Navbar';
import "./Timer.css";
import Sponsors from '../components/SPONSORS/Sponsors';

function Timer() {
  const [timeLeft, setTimeLeft] = useState(calculateRemainingTime());
  const [timeLeftDevjam, setTimeLeftDevjam] = useState(calculateRemainingTimeDevjam());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateRemainingTime());
      setTimeLeftDevjam(calculateRemainingTimeDevjam());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft,timeLeftDevjam]);


  function calculateRemainingTimeDevjam() {

  const yearDevjam = new Date().getFullYear();
  const eventDateDevjam = `02/29/${yearDevjam}`; // MM-DD-YYYY (31st Dec)
  const differenceDevjam = new Date(eventDateDevjam) - new Date();
  let timeRemainingDevjam = {};

  if (differenceDevjam > 0) {
    timeRemainingDevjam = {
      Days: Math.floor(differenceDevjam / (1000 * 60 * 60 * 24)),
      H: Math.floor((differenceDevjam / (1000 * 60 * 60)) % 24),
      M: Math.floor((differenceDevjam / (1000 * 60)) % 60),
      S: Math.floor((differenceDevjam / 1000) % 60),
    };
  }
  return timeRemainingDevjam;
}
  
  function calculateRemainingTime() {
    const year = new Date().getFullYear();
    const eventDate = `02/22/${year}`; // MM-DD-YYYY (31st Dec)
    const difference = new Date(eventDate) - new Date();
    let timeRemaining = {};


    if (difference > 0) {
      timeRemaining = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        H: Math.floor((difference / (1000 * 60 * 60)) % 24),
        M: Math.floor((difference / (1000 * 60)) % 60),
        S: Math.floor((difference / 1000) % 60),
      };
    }
    return timeRemaining;
  }



  const timerComponents = [];
  const timerDevjamComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span className={interval} key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  Object.keys(timeLeftDevjam).forEach((interval) => {
    if (!timeLeftDevjam[interval]) {
      return;
    }
    timerDevjamComponents.push(
      <span className={interval} key={interval}>
        {timeLeftDevjam[interval]} {interval}{" "}
      </span>
    );
  });

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Change the timeout value as needed

    return () => clearTimeout(timer);
  }, []); // Run useEffect only once on component mount

  return (
    <div>
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
          <h1 className="titleGlobal">DevJam</h1> 
          
          <p className='titleGlobal-desc'>GRAND AMPHI, ENSIAS. 03 MARS 2024</p>
          <div className="buttons">
          {timerComponents.length ? <button className="button">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSdB87jdyWDsrsKzv_X3X0fxYE4U3MR1VlWyvquqHlYArkcWRA/viewform?usp=sf_link' style={{textDecoration:'none',color:'#EFEFEF'}}>
                Register Now
              </a>
              </button>: <span style={{color:'red'}}>The form is ended</span>}
            </div>
        </div>
      </div>
      <div className='container-event'>
      {/* <div className="competession">
      <div className='AboutCompetesionheader'>
        <h1 className='AboutEventTitle'>About the competiton</h1>
        <span className='AboutEvent-desc px-5'>DevJam, an impactful development competition organized within the context of ITholic, the grand event hosted by ENSIAS IT Club, is an exciting platform where participants engage in a spirited competition to craft innovative development solutions within a specific domain (to be announced soon). Aligned with the overarching theme of ITholic, "The Future of ITOps," this event seeks to propel participants into the forefront of technological advancements. Teams are challenged to harness their creativity, technical expertise, and collaborative spirit to address real-world issues and contribute to the evolving landscape of IT Operations (ITOps).
        To be part of this extraordinary journey, seize the opportunity and register your team now, as the registration form will be closed on February 21 at 23:59. Join DevJam and play a pivotal role in shaping the future of ITOps!  </span>
      </div>
    </div> */}

    <div className='AboutCompetesionheader py-5'>
        <h1 className='AboutEventTitle'>DEVJAM V 2.0: Global Triumph Solutions Challenge</h1>
        <span className='AboutEvent-desc text-start px-5'>
        <b>Background:</b><br /><br />
        No Moroccan can forget the euphoria of the World Cup qualification in Qatar 2022. As the attention
        shifts towards hosting the Cup of Africa in 2025 and the World Cup in 2030, the organizing committee
        acknowledges the critical role that technology and operational efficiency will play in ensuring the success
        of these global events. Beyond the grand spectacle, hosting such monumental occasions is viewed as a
        catalyst for the country's development, intensifying the need for innovative and impactful solutions.<br /><br />
        DEVJAM challenges participants to explore inventive solutions and advancements across various
        domains, encompassing sports, tourism, and logistics, leveraging the power of ITOPS
        <br />
        <h6 style={{fontWeight:"bolder"}}>Sub-domains :</h6>
        <u>Sport :</u> <br />
        In the Sport domain, we seek innovations that enhance the overall event experience. This includes
        advanced event management for seamless coordination and immersive digital platforms for elevated fan
        engagement.<br />
        <u>Tourism :</u> <br />
        Within Tourism, the focus is on showcasing the host nation's cultural richness. Innovations in smart
        destination management aim to optimize visitor experiences, while strategies highlight how major
        sporting events can transform tourism and create lasting attractions.<br />
        <u>Logistics :</u> <br />
        The Logistics domain emphasizes efficiency and sustainability. Solutions aim to streamline coordination
        of resources and enhance event efficiency, while also promoting eco-friendly practices in transportation,
        accommodation, and supply chain management for lasting positive impacts.

        </span>
      </div>
      <div className='AboutCompetesionheader'>
        <h1 className='AboutEventTitle'>DEV JAM V 2 RULES</h1>
        <p>Competition details:</p>
        <a className="button-pdf" href={pdfFile} download>Download PDF</a>
      </div>

    {/* <div className='timerComponent'>
      <h1 className='AboutEventTitle'>The form ends in</h1>
      <div className='timeLeft'>
        {timerComponents.length ? timerComponents : <span>00:00:00</span>}
      </div>
    </div>  */}
      </div>

      <div className='mt-5 timerComponent'>
        <h1 className='AboutEventTitle'>Competition ends in</h1>
        <div className='timeLeft'>
          {timerDevjamComponents.length ? timerDevjamComponents : <span>00:00:00</span>}
        </div>
      </div>

      <Sponsors />

     <Footer />
     </div>
  );
}

export default Timer;
