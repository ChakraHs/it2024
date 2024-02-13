import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../assets/styles/speakers.css'; // Import CSS styles



const Speakers = () => {
  // Dummy data for speakers
  const speakers = [
    {
      id: 1,
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://zayed-mohammed-uddin.github.io/Axon-The-Annual-Conference/Images/Testimonials/team3.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://zayed-mohammed-uddin.github.io/Axon-The-Annual-Conference/Images/Testimonials/team2.jpg',
    },
    {
        id: 3,
        name: 'Jane Chakra',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imageUrl: 'https://zayed-mohammed-uddin.github.io/Axon-The-Annual-Conference/Images/Testimonials/team1.jpg',
      },
    // Add more speakers as needed
  ];

  return (
    <div className='speakers'>
        <div className='speackersheader'>
            <h2 className="text-center speakerTitle h-underline-6">Speakers</h2>
            <p className='w-50'>Lorem ipsum dolor sit amet, alia honestatis an qui, ne soluta nemore eripuit sed. Falli exerci aperiam ut his, prompta feugiat usu minimum delicata.</p>
        </div>
      <Row className="container">
        {speakers.map(speaker => (
          <Col key={speaker.id} xs={12} md={4}>
            <div className="onespeaker">
              <Image src={speaker.imageUrl} roundedCircle className="mb-3 speackerimage" />
              <h4 className='speakerName'>{speaker.name}</h4>
              <p>{speaker.description}</p>
              <div className='d-flex w-100 gap-4 justify-content-center'>
                <span>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='white'>
                        <path d="M12 2.5c3.4 0 3.8.1 5.1.3 1.4.2 2.4 1 3.4 1.9s1.6 2 1.9 3.4c.2 1.3.3 1.7.3 5.1s-.1 3.8-.3 5.1c-.2 1.4-1 2.4-1.9 3.4s-2 1.6-3.4 1.9c-1.3.2-1.7.3-5.1.3s-3.8-.1-5.1-.3c-1.4-.2-2.4-1-3.4-1.9s-1.6-2-1.9-3.4c-.2-1.3-.3-1.7-.3-5.1s.1-3.8.3-5.1c.2-1.4 1-2.4 1.9-3.4s2-1.6 3.4-1.9c1.3-.2 1.7-.3 5.1-.3zm0-1.5c-3.4 0-3.8.1-5.2.3-1.5.3-2.7 1.1-3.9 2.3s-2 2.4-2.3 3.9c-.2 1.4-.3 1.8-.3 5.2s.1 3.8.3 5.2c.3 1.5 1.1 2.7 2.3 3.9s2.4 2 3.9 2.3c1.4.2 1.8.3 5.2.3s3.8-.1 5.2-.3c1.5-.3 2.7-1.1 3.9-2.3s2-2.4 2.3-3.9c.2-1.4.3-1.8.3-5.2s-.1-3.8-.3-5.2c-.3-1.5-1.1-2.7-2.3-3.9s-2.4-2-3.9-2.3c-1.4-.2-1.8-.3-5.2-.3z"/>
                        <path d="M12 6.7c-2.9 0-5.3 2.4-5.3 5.3s2.4 5.3 5.3 5.3 5.3-2.4 5.3-5.3-2.4-5.3-5.3-5.3zm0 9.5c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z"/>
                        <circle cx="17.5" cy="6.5" r="1.5"/>
                        </svg>
                    </a>
                </span>
                <span>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M22.46 6.72c-.84.37-1.74.62-2.68.74.96-.58 1.7-1.5 2.05-2.6-.9.53-1.9.9-2.96 1.1-.85-.9-2.05-1.46-3.38-1.46-2.55 0-4.6 2.05-4.6 4.6 0 .36.04.7.12 1.04-3.83-.19-7.22-2.03-9.5-4.82-.4.68-.63 1.48-.63 2.33 0 1.6.81 3.02 2.05 3.85-.76-.02-1.48-.23-2.1-.6v.06c0 2.24 1.59 4.1 3.7 4.52-.4.1-.82.16-1.25.16-.3 0-.6-.02-.9-.07.6 1.8 2.3 3.1 4.3 3.14-1.58 1.25-3.57 1.98-5.73 1.98-.37 0-.74-.02-1.1-.07 2.04 1.3 4.45 2.05 7.07 2.05 8.48 0 13.1-7 13.1-13.1v-.6c.9-.65 1.7-1.46 2.34-2.38z"/>
                        </svg>
                    </a>
                </span>
                <span>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" fill='white'><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>


                </a>
                </span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Speakers;
