import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import '../../assets/styles/sponsors.css'; // Import CSS styles



const Sponsors = () => {
  // Dummy data for sponsors
  const sponsors = [
    {
      id: 1,
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://zayed-mohammed-uddin.github.io/Axon-The-Annual-Conference/Images/Logos/Google-Logo.png',
    },
    {
      id: 2,
      name: 'Jane Smith',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://zayed-mohammed-uddin.github.io/Axon-The-Annual-Conference/Images/Logos/YouTube-Logo-PNG7.png',
    },
    {
        id: 3,
        name: 'Jane Chakra',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imageUrl: 'https://zayed-mohammed-uddin.github.io/Axon-The-Annual-Conference/Images/Logos/twitterlogo.png',
      },
    // Add more sponsors as needed
  ];

  return (
    <div className='sponsors'>
        <div className='sponsorsheader'>
            <h2 className="text-center sponsorTitle h-underline-6">Sponsors</h2>
            <p className='w-50'>Lorem ipsum dolor sit amet, alia honestatis an qui, ne soluta nemore eripuit sed. Falli exerci aperiam ut his, prompta feugiat usu minimum delicata.</p>
        </div>
      <Row className="container">
        {sponsors.map(sponsor => (
          <Col key={sponsor.id} xs={12} md={4}>
            <div className="onesponsor">
              <Image src={sponsor.imageUrl} className="mb-3 sponsorimage" />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Sponsors;
