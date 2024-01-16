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


import pic48 from "../../../public/OneWay2023-webp/DSC04686.webp";
import pic49 from "../../../public/OneWay2023-webp/DSC05152.webp";
import pic50 from "../../../public/OneWay2023-webp/DSC05358.webp";
import pic51 from "../../../public/OneWay2023-webp/DSC05388.webp";
import pic52 from "../../../public/OneWay2023-webp/DSC05494.webp";
import pic53 from "../../../public/OneWay2023-webp/DSC05524.webp";
import pic54 from "../../../public/OneWay2023-webp/DSC05563.webp";
import pic55 from "../../../public/OneWay2023-webp/DSC05580.webp";

const pictures = [pic48, pic49, pic50,
  pic51, pic52, pic53, pic54, pic55];

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

