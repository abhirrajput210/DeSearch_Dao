
import React from 'react';

import { useParams } from 'react-router-dom';

function CardDetailsScreen({ cardData }) {
  const { id } = useParams();

  // Find the corresponding card based on the provided ID
  const card = cardData.find((card) => card.id === parseInt(id, 10));

  if (!card) {
    return <div>Card not found.</div>;
  }

  return (
    <div style={{marginTop:'100px'}}>
      <div className='card-container'>
        <div className='image-container'>
          <img src={card.img} alt='img' style={{ width: '100%', height: '380px', objectFit: 'contain' }} />
        </div>
        <div className='card-content'>
          <div className='card-title'>
            <h3>{card.title}</h3>
          </div>
          <div className='card-body'>
            <p>{card.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetailsScreen;
