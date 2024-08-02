import { FoodInMind } from '../Data/FoodCarousel';

function FoodCarousel() {
  return (
    <div className="row scrollbar" id="scrollbar-custom">
    
        <h2 className='title'>What&apos;s on your mind?</h2>
     
      {FoodInMind.map((data, index) => {
        return <img key={index} src={data.url} />;
      })}
    </div>
  );
}

export default FoodCarousel;