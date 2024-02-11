import React from 'react';
import { FoodInMind } from '../Data/FoodCarousel';

function FoodCarousel() {
  return (
    <div className="row scrollbar" id="scrollbar-custom">
    
        <h2 className='title'>What's on your mind?</h2>
     
      {FoodInMind.map((data) => {
        return <img src={data.url} />;
      })}
    </div>
  );
}

export default FoodCarousel;