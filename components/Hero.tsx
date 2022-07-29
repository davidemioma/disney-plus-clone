import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <section className="relative mt-4 shadow-2xl max-w-screen-2xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img loading="lazy" src="/images/slider-1.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="/images/slider-2.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="/images/slider-3.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="/images/slider-4.jpeg" alt="" />
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
