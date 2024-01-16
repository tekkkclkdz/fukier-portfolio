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

import pic26 from "../../../public/laSquadra-webp/DSC02827.webp";
import pic27 from "../../../public/laSquadra-webp/DSC02977.webp";
import pic28 from "../../../public/laSquadra-webp/DSC03136.webp";
import pic29 from "../../../public/laSquadra-webp/DSC03254.webp";
import pic30 from "../../../public/laSquadra-webp/DSC03341.webp";
import pic31 from "../../../public/laSquadra-webp/DSC03458.webp";
import pic32 from "../../../public/laSquadra-webp/DSC03495.webp";
import pic33 from "../../../public/laSquadra-webp/DSC03513.webp";
import pic34 from "../../../public/laSquadra-webp/DSC03763.webp";


const pictures = [pic26, pic27, pic28, pic29, pic30,
  pic31, pic32, pic34, pic33];

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

