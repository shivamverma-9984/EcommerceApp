import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <div className=" p-4  ">
      <Carousel
        autoPlay
        showStatus={false}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
        transitionTime={2000}
        stopOnHover={true}
        emulateTouch={true}
        className="mx-4 mt-10"
      
      >
        <img
          className="h-48 md:h-[420px] rounded-lg    "
          alt=""
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Gw/Dec/one/Monthly/Bestfinds-Unrec-PC_3000._CB586257034_.jpg"
        />
        <img className="h-48 md:h-[420px] rounded-lg    " alt="" src="img2.jpg" />

        <img className="h-48 md:h-[420px] rounded-lg" alt="" src="img3.jpg" />

        <img className="h-48 md:h-[420px] rounded-lg  " alt="" src="img4.jpg" />
        <img className="h-48 md:h-[420px] rounded-lg  " alt="" src="img5.jpg" />
      </Carousel>
    </div>
  );
};

export default Hero;
