import React from "react";
import Card from "./Card";
import FoodCarousel from "./FoodCarousel";

function Resturent() {
  return (
    <>
      <div className="resturent">
        {/* <input type="search" placeholder="Search..."></input> */}
      </div>
      <FoodCarousel/>
      <Card />
    </>
  );
}

export default Resturent;
