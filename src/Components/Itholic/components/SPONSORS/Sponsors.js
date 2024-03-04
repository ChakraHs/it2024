import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import '../../assets/styles/sponsors.css'; // Import CSS styles

import DXC from '../../assets/media/images/DXC_CDG.png';
import CDG from '../../assets/media/images/CDG.png';
import VEO from '../../assets/media/images/VEO.png';



const Sponsors = () => {
  // Dummy data for sponsors
  const sponsors = [
    {
      id: 1,
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: CDG,
    },
    {
      id: 2,
      name: 'Jane Smith',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: VEO,
    },
    {
        id: 3,
        name: 'Jane Chakra',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imageUrl: DXC ,
      },
    // Add more sponsors as needed
  ];

  return (
    <div className='sponsors'>
        <div className='sponsorsheader'>
            <h2 className="text-center sponsorTitle h-underline-6">Sponsors</h2>
            <p className='w-50'>We're incredibly grateful to our sponsors for their generous support. Your partnership makes a real difference. Thank you for believing in our mission.</p>
        </div>
      <Row className="container">
        {sponsors.map(sponsor => (
          <Col key={sponsor.id} xs={12} md={4}>
            <div className="onesponsor">
              <Image src={sponsor.imageUrl} className={sponsor.id === 2 ? 'sponsorOfficiel' : sponsor.id === 3 ?'sponsorDxc':'mb-3 sponsorimage'} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Sponsors;
