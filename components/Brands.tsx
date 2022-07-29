import React from "react";
import Brand from "./Brand";

const Brands = () => {
  return (
    <section className="flex flex-col md:flex-row gap-6 items-center justify-center mt-10 px-8 max-w-[1400px] mx-auto">
      <Brand imgSrc="/images/disnep.png" videoSrc="/videos/disney.mp4" />

      <Brand imgSrc="/images/pixar.png" videoSrc="/videos/pixar.mp4" />

      <Brand imgSrc="/images/marvel.png" videoSrc="/videos/marvel.mp4" />

      <Brand imgSrc="/images/starwars.png" videoSrc="/videos/star-wars.mp4" />

      <Brand
        imgSrc="/images/national-geographic.png"
        videoSrc="/videos/national-geographic.mp4"
      />
    </section>
  );
};

export default Brands;
