import React from 'react';
import CustomCard from './customCard';
import cardData from './CardData/data.js';
import "./customCardContainer.css";

function CustomCardContainer() {
  return (
    <div className='container'>
      {cardData.map((card) => (
        <div className='item'>
        <CustomCard
          key={card.id}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
        />
        </div>
      ))}
    </div>
  );
}

export default CustomCardContainer;
