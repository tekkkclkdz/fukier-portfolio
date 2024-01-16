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


import pic108 from "../../../public/RollsRoyce-webp/DSC02490.webp";
import pic109 from "../../../public/RollsRoyce-webp/DSC02569.webp";
import pic110 from "../../../public/RollsRoyce-webp/fukier3.webp";
import pic111 from "../../../public/RollsRoyce-webp/fukier4.webp";
import pic112 from "../../../public/RollsRoyce-webp/fukier5.webp";
import pic113 from "../../../public/RollsRoyce-webp/fukier6.webp";
import pic114 from "../../../public/RollsRoyce-webp/fukier12.webp";
import pic115 from "../../../public/RollsRoyce-webp/fukier13.webp";

const pictures = [pic108, pic109, pic110, pic111, pic112, pic113, pic114, pic115];

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

