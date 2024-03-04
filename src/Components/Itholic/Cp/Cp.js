import React, { useEffect, useState } from 'react';
import '../assets/styles/GlobalPage.css'; // Import CSS styles
import itholicVideo from '../assets/media/itholic8.mp4'; // Import the video file
import '../assets/styles/AboutEvent.css'; // Import CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';

import Schedule from '../components/Schedule';
import Footer from '../../Footer/Footer';
import Navbar from '../../Header/Navbar';
import "./Timer.css";
import CpNutshell from './CpNutshell';
import Sponsors from '../components/SPONSORS/Sponsors';

function Timer() {
  const [timeLeft, setTimeLeft] = useState(calculateRemainingTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateRemainingTime());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  function calculateRemainingTime() {
    const year = new Date().getFullYear();
    const eventDate = `02/26/${year}`; // MM-DD-YYYY (31st Dec)
    const difference = new Date(eventDate) - new Date() - 6*1000 * 60 * 60;
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
          <h1 className="titleGlobal pt-5">Competitive <br /> Programing</h1> 
          
          <p className='titleGlobal-desc'>A9, ENSIAS. 2 mars 2024</p>
          <div className="buttons">
          {timerComponents.length ? <button className="button">
              <a href='https://forms.gle/aq2ciTF1ZqiWyydt7' style={{textDecoration:'none',color:'#EFEFEF'}}>
                Register Now
              </a>
              </button>: <span style={{color:'red'}}>The form is ended</span>}
            </div>
        </div>
      </div>
      <div className='container-event'>
      <div className="competession">
      <div className='AboutCompetesionheader'>
        <h1 className='AboutEventTitle'>About the competiton</h1>
        <span className='AboutEvent-desc px-5'>
            Unleach your true coding skills and Join our competitive programming contest ,to challenge yourself against the best coders.  Register your team bellow to show off your skills and have the chance to win great prizes .
            - only one member of the team will fill the form as contact point
            - you will have to enter the infos of your teammates in the second page

            for any question or clarification, feel free to contact us by : ensiasitc@gmail.com

            DEADLINE : 25 February 2024, at 18:00 </span>
    </div>
    </div>


    <div className='timerComponent'>
      <h1 className='AboutEventTitle'>The form ends in</h1>
      <div className='timeLeft'>
        {timerComponents.length ? timerComponents : <span>00:00:00</span>}
      </div>
    </div> 
      </div>

      <Sponsors />
     <Footer />
     </div>
  );
}

export default Timer;
