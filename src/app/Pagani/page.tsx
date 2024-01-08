"use client"
import Image from "next/image";
import React from "react";
import NavBar from "../../components/NavBar";
import Masonry from "react-masonry-css";
import { useMediaQuery } from "react-responsive";
import {  useRef } from 'react';

import type { LightGallery } from 'lightgallery/lightgallery';
import LightGalleryComponent from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


import pic56 from "../../../public/pagani-webp/DSC09095.webp";
import pic57 from "../../../public/pagani-webp/DSC09121.webp";
import pic58 from "../../../public/pagani-webp/DSC09131.webp";
import pic59 from "../../../public/pagani-webp/DSC09145p.webp";
import pic60 from "../../../public/pagani-webp/DSC09169.webp";
import pic61 from "../../../public/pagani-webp/DSC09174-2.webp";
import pic62 from "../../../public/pagani-webp/DSC09189.webp";
import pic63 from "../../../public/pagani-webp/DSC09199.webp";
import pic64 from "../../../public/pagani-webp/DSC09216.webp";
import pic65 from "../../../public/pagani-webp/DSC09220.webp";

const pictures = [pic56, pic57, pic58, pic59, pic60,
  pic61, pic62, pic63, pic64, pic65];

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const breakpointCols = isMobile ? 1 : 2;

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
  
  const lightboxRef = useRef<LightGallery | null>(null)

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

