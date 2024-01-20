import React from 'react';
import Resturent from './Resturent';
import Footer from './Footer';

function Body() {
  return (
    <div className="body">
      <div className="line-top"></div>
      <img src="src/images/Delevary.jpg" alt="develary"></img>
      <div className="line-bottom"></div>
      <Resturent />
      <Footer />
    </div>
  );
}

export default Body