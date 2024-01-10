import React from "react";
import { sliderImageUrl } from "../constant/sliderImageUrl";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Topdeal = () => {
  return (
    <div className="p-4 space-x-4 mb-2">
              <h1 className='text-black  text-xl md:text-4xl font-medium tracking-widest uppercase md:mb-4 md:mt-4 ml-4' >BIGGEST DEALS ON TOP BRANDS</h1>

      <Carousel
           responsive={responsive}
           autoPlay={true}
           swipeable={true}
           draggable={true}
          
           infinite={true}
           partialVisible={false}
           dotListClass="custom-dot-list-style"
        className=""
       
        
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="mt-4 " key={index}>
              <img src={imageUrl.url} alt="movie" className="h-[180px] w-[180px] md:h-[270px] md:w-[200px]" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Topdeal;
