// Schedule.js
import React, { useState } from 'react';
import '../assets/styles/schedule.css'; // Import CSS styles
import OurCells from './DayPlanning/DayPlanning';
import DayPlanning from './DayPlanning/DayPlanning';


function Schedule() {
  // Define state to track which day is selected
  const [selectedDay, setSelectedDay] = useState(1); // Default to the first day

  // Define the list of days and their activities

  const day1info = [{
    tim1: {
        title: "10:00 AM - 6:00 PM",
        text: "Stands des sponsors"
    }},{
    tim2: {
        title: "2:30 PM - 3:00 PM",
        text: "Cérémonie d'ouverture"
    }},{
    tim3:{
        title: "3:00 PM - 5:00 PM",
        text: "Conférence 1"
    }},{
    tim4: {
        title: "5:00 PM - 5:30 PM",
        text: "Break"
    }},{
    tim5: {
        title: "6:00 PM - 8:00 PM",
        text: "Workshop"
    }
}];

const day2info = [{
    tim1: {
        title: "9:00 AM - 1:30 PM",
        text: "CP Contest"
    }},{
    tim2: {
        title: "1:30 PM - 2:30 PM",
        text: "Break"
    }},{
    tim3: {
        title: "2:30 PM - 5:30 ~ 6:00 PM",
        text: "Conférence 2"
    }
}];

const day3info = [{
    tim1: {
        title: "9:00 AM - 11:00 AM",
        text: "Open Talks"
    }},{
    tim2: {
        title: "11:00 AM - 11:30 AM",
        text: "Break"
    }},{
    tim3: {
        title: "11:30 AM - 2:00 PM",
        text: "Pitch DevJam"
    }},{
    tim4: {
        title: "2:00 PM - 3:00 PM",
        text: "Break"
    }},{
    tim5: {
        title: "3:00 PM - ..",
        text: "Cérémonie de remise de prix"
    }
}];
  const days = [
    {
      day: 1,
      activities: [
        { time: '10:00 am - 2:00 pm', activity: 'Stands des sponsors' },
        { time: '2:30 pm -3:00 pm', activity: 'Cérémonie d\'ouverture ' },
        { time: '3:00 pm - 5:00 pm', activity: 'Conférence 1' },
        { time: '5:00 pm - 5:30 pm', activity: 'Break' },
        { time: '6:00 pm - 8:00 pm', activity: 'Workshop' },
      ]
    },
    {
      day: 2,
      activities: [
        { time: '9:00 am - 1:30 pm', activity: 'CP Contest' },
        { time: '1:30 pm - 2:30 pm', activity: 'Break' },
        { time: '2:30 pm - 5:30 ~ 6:00 pm', activity: 'Conférence 2' }
      ]
    },
    {
      day: 3,
      activities: [
        { time: '9:00 am - 11:00 am', activity: 'Open Talks' },
        { time: '11:00 am -11:30 am', activity: 'Break ' },
        { time: '11:30 am - 2:00 pm', activity: 'Pitch DevJam' },
        { time: '2:00 pm -3:00 pm', activity: 'Break ' },
        { time: '3:00 pm - ..', activity: 'Cérémonie de remise de prix ' },
      ]
    }
  ];

  // Function to handle day selection
  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="schedule">
        <div className='scheduleHeader'>
            <h1 className='scheduleTitle h-underline-6'>SCHEDULE</h1>
        </div>
      {/* Buttons to select days */}
      <div className="day-selector justify-content-center d-flex w-100">
        {days.map((dayObj) => (
          <button
            key={dayObj.day}
            className={selectedDay === dayObj.day ? 'active dayBtn' : 'dayBtn'}
            onClick={() => handleDaySelect(dayObj.day)}
          >
            <div class="dayBtnContent">
              <div className='dayBtnBack'>
                <div className='dayBtnBackContent'>
                  <div className='col-md-3 day'>
                    Day {dayObj.day}
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
      {/* Display activities for the selected day */}
      <div className="activities col-md-10">
        {/* <h2>Day {selectedDay} Activities:</h2> */}
        <DayPlanning dayinfo = {selectedDay == 1 ? day1info: selectedDay == 2 ? day2info : day3info}></DayPlanning>
        {/* <ul>
          {days[selectedDay - 1].activities.map((activity, index) => (
            <li key={index}>
              <span className="time">{activity.time}</span> - {activity.activity}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default Schedule;