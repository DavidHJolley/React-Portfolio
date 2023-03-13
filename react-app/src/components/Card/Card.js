import React from 'react';
import { Card } from 'react-bootstrap';
import './CardElement.css'

const CardElement = ({ image, title, description }) => {
  return (
    <div className='col-md-4 my-4'>
      <Card className='card-zoom' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', }}>
        <div className='overlay'></div>
        <Card.Body>
          <div className='translucent'>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardElement;
