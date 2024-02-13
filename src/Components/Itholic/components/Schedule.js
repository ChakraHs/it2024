// Schedule.js
import React, { useState } from 'react';
import '../assets/styles/schedule.css'; // Import CSS styles
import OurCells from './DayPlanning/DayPlanning';
import DayPlanning from './DayPlanning/DayPlanning';


function Schedule() {
  // Define state to track which day is selected
  const [selectedDay, setSelectedDay] = useState(1); // Default to the first day

  // Define the list of days and their activities

  const day1info = [
    {
        tim1: {
            title: "8:30 a.m - 11:30 a.m",
            text: "planning of matin.",
        }
    },
    {
        tim2: {
            title: "9:30 a.m - 11:30 a.m",
            text: "lftor okda",
        }
    },
    {
        time3: {
            title: "12:30 p.m - 1:30 p.m",
            text: "chi tajin mbr3 fach yrb7 hossin lahoma barik",
        }

    },
]


const day2info = [
  {
      tim1: {
          title: "8:30 a.m - 11:30 a.m",
          text: "planning of matin day2.",
      }
  },
  {
      tim2: {
          title: "9:30 a.m - 11:30 a.m",
          text: "lftor okda",
      }
  },
  {
      time3: {
          title: "12:30 p.m - 1:30 p.m",
          text: "chi tajin mbr3 fach yrb7 hossin lahoma barik",
      }

  },
]



const day3info = [
  {
      tim1: {
          title: "8:30 a.m - 11:30 a.m",
          text: "planning of matin day3.",
      }
  },
  {
      tim2: {
          title: "9:30 a.m - 11:30 a.m",
          text: "lftor okda",
      }
  },
  {
      time3: {
          title: "12:30 p.m - 1:30 p.m",
          text: "chi tajin mbr3 fach yrb7 hossin lahoma barik",
      }

  },
]
  const days = [
    {
      day: 1,
      activities: [
        { time: '10:00 AM', activity: 'Morning Yoga' },
        { time: '12:00 PM', activity: 'Lunch Break' },
        { time: '2:00 PM', activity: 'Workshop: React Basics' }
      ]
    },
    {
      day: 2,
      activities: [
        { time: '9:00 AM', activity: 'Breakfast' },
        { time: '11:00 AM', activity: 'Panel Discussion' },
        { time: '1:00 PM', activity: 'Lunch Break' }
      ]
    },
    {
      day: 3,
      activities: [
        { time: '10:00 AM', activity: 'Keynote Speech' },
        { time: '1:00 PM', activity: 'Networking Session' }
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
      <div className="day-selector row container justify-content-center d-flex w-100">
        {days.map((dayObj) => (
          <button
            key={dayObj.day}
            className={selectedDay === dayObj.day ? 'active col-md-4 row dayBtn' : 'col-md-4 row dayBtn'}
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