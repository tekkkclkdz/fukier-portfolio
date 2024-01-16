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

import pic1 from "../../../public/concorso-webp/53Plik_.webp"
import pic2 from "../../../public/concorso-webp/94069-2.webp"
import pic3 from "../../../public/concorso-webp/DSC09127.webp"
import pic4 from "../../../public/concorso-webp/DSC09160.webp"
import pic5 from "../../../public/concorso-webp/DSC09161.webp"
import pic6 from "../../../public/concorso-webp/DSC09209.webp"
import pic7 from "../../../public/concorso-webp/DSC09265.webp"
import pic8 from "../../../public/concorso-webp/DSC09291.webp"
import pic9 from "../../../public/concorso-webp/DSC09343.webp"
import pic10 from "../../../public/concorso-webp/DSC09462.webp"
import pic11 from "../../../public/concorso-webp/DSC09639.webp"
import pic12 from "../../../public/concorso-webp/DSC09691.webp"


const pictures = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10,
  pic11, pic12];

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

