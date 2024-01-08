"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import NavBar from '../../components/NavBar';
import { useMediaQuery } from 'react-responsive';
import Masonry from 'react-masonry-css';

import {  useRef } from 'react';

import type { LightGallery } from 'lightgallery/lightgallery';
import LightGalleryComponent from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
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

  const lightboxRef = useRef<LightGallery | null>(null)

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  return (
    <div className="absolute w-full h-full left-0 top-0" suppressHydrationWarning={true}>
      <NavBar />
      <Masonry className="flex gap-2 bg-white" columnClassName="" breakpointCols={breakpointCols}>
              {pictures.map((pics, idx) => (
              <Image
                  key={pics.src}
                  src={pics}
                  alt="placeholder"
                  className="static transition duration-150 hover:opacity-70 cursor-pointer my-2 "
                  placeholder="blur" 
                  onClick={() => {
                  lightboxRef.current?.openGallery(idx);
                  }}
              />
              ))}   
          </Masonry>

          <LightGalleryComponent
      onInit={(ref) => {
          if (ref) {
              lightboxRef.current = ref.instance
          }
      }}
      speed={500}
      plugins={[]}
      dynamic
      download={false}
      dynamicEl={pictures.map((allImg) => ({
          src: allImg.src,
      }))}
  />
    </div>
  );
}



