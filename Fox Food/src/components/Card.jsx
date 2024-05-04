import { Fragment } from "react";
import { restaurantList, IMG_CDN_URL, RATING } from "../Data/resData";
function Card() {
  return (
    <div className="card">
      {restaurantList.map((cards) => (
        <Fragment key={cards.info.id}>
          <ul>
            <li>
              <img className="cardpic" src={IMG_CDN_URL+cards.info.cloudinaryImageId} />
            </li>
            <h4>{cards.info.name}</h4>
            <li className="rating">
              <img src={RATING} /> <span>{cards.info.avgRating} .</span>  
              <span>{cards.info.deliveryTime + " mins"}</span>
            </li>
            <li>{cards.info.cuisines.join(", ")}</li>
          </ul>
        </Fragment>
      ))}
    </div>
  );
}

export default Card;
