import React, { Fragment } from "react";
import { restaurantList, IMG_CDN_URL, RATING } from "../Data/resData";
function Card() {
  return (
    <div className="card">
      {restaurantList.map((cards) => (
        <Fragment key={cards.data.id}>
          <ul>
            <li>
              <img  className="cardpic" src={IMG_CDN_URL + cards.data.cloudinaryImageId} />
            </li>
            <h4>{cards.data.name}</h4>
            <li className="rating">
              <img src={RATING} /> <span>{cards.data.avgRating} .</span>  
              <span>{cards.data.deliveryTime + " mins"}</span>
            </li>
            <li>{cards.data.cuisines.join(", ")}</li>
          </ul>
        </Fragment>
      ))}
    </div>
  );
}

export default Card;
