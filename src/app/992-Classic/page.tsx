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
import pic125 from "../../../public/992-classic-webp/DSC08431.webp";
import pic126 from "../../../public/992-classic-webp/DSC08443.webp";
import pic127 from "../../../public/992-classic-webp/DSC08446.webp";
import pic128 from "../../../public/992-classic-webp/DSC08487.webp";
import pic129 from "../../../public/992-classic-webp/DSC08524.webp";
import pic130 from "../../../public/992-classic-webp/DSC08533.webp";
import pic131 from "../../../public/992-classic-webp/DSC08608.webp";
import pic132 from "../../../public/992-classic-webp/DSC08693a.webp";
import pic133 from "../../../public/992-classic-webp/DSC08700.webp";
import pic134 from "../../../public/992-classic-webp/DSC08700a.webp";
import pic135 from "../../../public/992-classic-webp/DSC08717a.webp";
import pic136 from "../../../public/992-classic-webp/DSC08891.webp";

const pictures = [
  pic125, pic126, pic127, pic128, pic129, pic130, pic131, pic132, pic133, pic134, pic136, pic135, 
];

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const breakpointCols = isMobile ? 1 : 2;

  const lightboxRef = useRef<LightGallery | null>(null)

  // document.addEventListener("contextmenu", function (e) {
  //   e.preventDefault();
  // });

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



