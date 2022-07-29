import React from "react";
import Image from "next/image";

interface Props {
  videoSrc: string;
  imgSrc: string;
}

const Brand = ({ videoSrc, imgSrc }: Props) => {
  return (
    <div className="relative group flex w-52 h-24 sm:w-64 sm:h-36 border-[3px] border-[#f9f9f9] border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden hover:border-opacity-80 hover:shadow-2xl hover:scale-105 transition transform duration-300">
      <Image src={imgSrc} layout="fill" objectFit="cover" />

      <video
        className="hidden w-full group-hover:inline rounded-lg object-cover"
        src={videoSrc}
        autoPlay
        loop
        playsInline
      />
    </div>
  );
};

export default Brand;
