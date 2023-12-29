"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import NavBar from '../../components/NavBar';
import { useMediaQuery } from 'react-responsive';
import Masonry from 'react-masonry-css';

import pic1 from '../../../public/992-43-webp-glowna/DSC00102-Edit.webp';
import pic2 from '../../../public/992-43-webp-glowna/DSC00142-Edit.webp';
import pic3 from '../../../public/992-43-webp-glowna/DSC00147-Poprawione-Szum.webp';
import pic4 from '../../../public/992-43-webp-glowna/DSC00156-Edit.webp';
import pic5 from '../../../public/992-43-webp-glowna/DSC00971.webp';
import pic6 from '../../../public/992-43-webp-glowna/DSC00978-Poprawione-Szum.webp';
import pic7 from '../../../public/992-43-webp-glowna/DSC01011.webp';
import pic8 from '../../../public/992-43-webp-glowna/DSC01146-Poprawione-Szum.webp';
import pic9 from '../../../public/992-43-webp-glowna/DSC01275-Edit.webp';
import pic10 from '../../../public/992-43-webp-glowna/DSC09995.webp';

const pictures = [
  pic1, pic2, pic3, pic4, pic5, pic10, pic6, pic7, pic9, pic8,
];

export default function Home() {
  


  const isMobile = useMediaQuery({ maxWidth: 767 });
  const breakpointCols = isMobile ? 1 : 2;

  return (
    <div className="absolute w-full h-full left-0 top-0">
      <NavBar />
   
        <Masonry className="flex gap-2 bg-white" columnClassName="" breakpointCols={breakpointCols}>
          {pictures.map((picturesImg, idx) => (
            <div key={`${picturesImg.src}`} className="relative">
              <Image
                src={picturesImg}
                alt="992-4S"
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





