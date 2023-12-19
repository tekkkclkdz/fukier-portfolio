"use client"
import Image from "next/image";
import React from "react";
import NavBar from "../../components/NavBar";
import Masonry from "react-masonry-css";
import { useMediaQuery } from "react-responsive";

import pic1 from "../../../public/taycan-webp-glowna/DSC03498.webp";
import pic2 from "../../../public/taycan-webp-glowna/Taycan12.webp";
import pic3 from "../../../public/taycan-webp-glowna/Taycan16.webp";
import pic4 from "../../../public/taycan-webp-glowna/Taycan4.webp";
import pic5 from "../../../public/taycan-webp-glowna/Taycan5.webp";
import pic6 from "../../../public/taycan-webp-glowna/Taycan7.webp";
import pic7 from "../../../public/taycan-webp-glowna/Taycan9.webp";

const pictures = [pic1, pic3, pic2, pic4, pic5, pic6, pic7];

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const breakpointCols = isMobile ? 1 : 2;

  return (
    <div className="absolute w-full h-full left-0 top-0">
      <NavBar />
      <Masonry
        className="flex gap-2 bg-white"
        columnClassName=""
        breakpointCols={breakpointCols}
      >
        {pictures.map((picturesImg, idx) => (
          <div key={`${picturesImg.src}`} className="relative">
            <Image
              src={picturesImg}
              alt="taycan"
              className="static transition duration-150 hover:opacity-70 cursor-pointer my-2"
              loading="lazy"
              sizes="(max-width: 768px), 50vw, (max-width: 1200px) 30vw, 20vw"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}


