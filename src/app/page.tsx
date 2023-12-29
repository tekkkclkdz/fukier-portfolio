"use client"
import Image from "next/image"
import pic1 from "../../public/porsche_main.webp"
import pic2 from "../../public/992-43-webp-glowna/DSC01011.webp"
import pic3 from "../../public/taycan-webp-glowna/taycan-glowna.webp"

import Link from 'next/link';

// to propozycja DSC01011.webp

import NavBar from "../components/NavBar"

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="relative w-full h-full left-0 top-0">
        <Image src={pic1} alt="m" className="sticky left-0 top-0 w-full h-screen object-cover z-[-1]" />
      </div>
      <Link href="/992-4S">
        <div className="group relative w-full h-96">
          <Image src={pic2} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            Porsche 992 4S
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            for Porsche centrum Katowice
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
            Porsche 992 4S
          </h3>
        </div>
    </Link>
    <Link href="/TaycanGTS">
      <div className="group relative w-full h-96 ">
        <Image src={pic3} alt="m3" className="static left-0 top-0 w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
        <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
          Taycan GTS Hockenheim Edition
        </h1>
        <h2 className="absolute opacity-0 text-center font-thin group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl md:my-2 my-4 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
          for Porsche Centrum Katowice
        </h2>
        <h3 className="absolute group-hover:opacity-0 bottom-0 hover:transition duration-300 my-8 font-light  mx-8 text-3xl text-fukier-background z-10">
          Taycan GTS Hockenheim Edition
        </h3>
      </div>
      </Link>
    </div>
  );
}
