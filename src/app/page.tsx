"use client"
import Image from "next/image"
import pic1 from "../../public/porsche_main.webp"
import pic2 from "../../public/992-43-webp-glowna/glowna_porsch.webp"
import pic3 from "../../public/taycan-webp-glowna/taycan-glowna.webp"
import pic4 from "../../public/RollsRoyce-webp/4957854C-A042-4717-BF51-D3DE86F70A61_1_201_a.jpeg"
import pic5 from "../../public/Richter-webp/Richter21.webp"
import pic6 from "../../public/Porsche-roadtour-webp/E9651578-D3AB-4054-982E-1386BD597963_1_201_a.jpeg"
import pic7 from "../../public/Porsche-club-webp/DSC08650.webp"
import pic8 from "../../public/pagani-webp/3935DE71-4BE5-4184-8657-C092170DA934_1_201_a.jpeg"
import pic9 from "../../public/m4-csl-webp/4B3A0481-E28B-44D5-A70A-AA6442047B2D_1_201_a.jpeg"
import pic10 from "../../public/OneWay2023-webp/6ECC8C63-8AF3-4A3E-880D-B9F64666E40A_1_201_a.jpeg"
import pic11 from "../../public/OneWay2022/oneway48.webp"
import pic12 from "../../public/laSquadra-webp/DSC03341.webp"
import pic13 from "../../public/ktm-webp/ktm14.webp"
import pic14 from "../../public/esperienza-webp/91FAB103-C4AD-40AE-91AC-4A6FE5DF0421_1_201_a.jpeg"
import pic15 from "../../public/concorso-webp/DSC09209.webp"
import pic16 from "../../public/bmw-m5-webp/67-06613.webp"
import pic17 from "../../public/bmw-individual-webp/47429843-8DEF-4E19-A025-7127AEB4C12F_1_201_a.jpeg"
import pic18 from "../../public/alpine-webp/40488211-2A7E-458E-AD8C-7F1CB7D90753_1_201_a.jpeg"
import pic19 from "../../public/992-classic-webp/BBEDA8F2-485B-4857-80BE-14E415F2CBFF_1_201_a.jpeg"
import Link from 'next/link';

// to propozycja DSC01011.webp

import NavBar from "../components/NavBar"

export default function Home() {

  // document.addEventListener("contextmenu", function (e) {
  //   e.preventDefault();
  // });

  return (
    <div suppressHydrationWarning={true} >
      <NavBar />
      <div className="relative w-full h-full left-0 top-0">
        <Image src={pic1} alt="m" priority={true} className="sticky left-0 top-0 w-full h-screen object-cover z-[-1]" />
      </div>


      <Link href="/RollsRoyce">
        <div className="group relative w-full h-96">
          <Image src={pic4} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            Rolls Royce Phantom
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            for Rolls Royce Deutschland
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
            Rolls Royce Phantom
          </h3>
        </div>
    </Link>

    <Link href="/992-4S">
        <div className="group relative w-full h-96">
          <Image src={pic2} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            Porsche 992 4S
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            for Porsche Centrum Katowice
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
            Porsche 992 4S
          </h3>
        </div>
    </Link>

    <Link href="/Pagani">
        <div className="group relative w-full h-96">
          <Image src={pic8} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            Pagani Codalunga
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            for Pagani Of Warsaw
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
            Pagani Codalunga
          </h3>
        </div>
    </Link>
      
    <Link href="/Alpine">
        <div className="group relative w-full h-96">
          <Image src={pic18} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            Alpine A110S
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            for Alpine Katowice
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
            Alpine
          </h3>
        </div>
    </Link>
      
      
      <Link href="/Richter">
        <div className="group relative w-full h-96">
          <Image src={pic5} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            Porsche 996 Turbo | Porsche 994 4S
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            for Richter Motors
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
          Porsche 996 Turbo | Porsche 993 4S
          </h3>
        </div>
    </Link>


    <Link href="/M4-csl">
        <div className="group relative w-full h-96">
          <Image src={pic9} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            M4 CSL
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            for Private Client
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
            M4 CSL
          </h3>
        </div>
    </Link>
    

    <Link href="/Porsche-roadtour">
        <div className="group relative w-full h-96">
          <Image src={pic6} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            Porsche Road Tour
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            for Porsche Centrum Katowice
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
            Porsche Road Tour
          </h3>
        </div>
    </Link>

    <Link href="/Concorso">
        <div className="group relative w-full h-96">
          <Image src={pic15} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
          Concorso d'Eleganza Villa D'este
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            for Motór Magazyn
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
          Concorso d'Eleganza Villa D'este
          </h3>
        </div>
    </Link>

    <Link href="/Bmw-individual">
        <div className="group relative w-full h-96">
          <Image src={pic17} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            BMW 7 Series Individual
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            for BMW Sikora
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
          BMW 7 Series Individual
          </h3>
        </div>
    </Link>

    <Link href="/OneWay2023">
        <div className="group relative w-full h-96">
          <Image src={pic10} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            Road Trip
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            for One Way Club 2023
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
          Road Trip
          </h3>
        </div>
    </Link>

    <Link href="/Bmw-m5">
        <div className="group relative w-full h-96">
          <Image src={pic16} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            BMW M5 Competition
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            for BMW Sikora
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
            BMW M5 Competition
          </h3>
        </div>
    </Link>

    <Link href="/Esperienza">
        <div className="group relative w-full h-96">
          <Image src={pic14} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            Ferrari Esperienza
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            for LaSquadra
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
            Ferrari Esperienza
          </h3>
        </div>
    </Link>
    

    <Link href="/Porsche-club">
        <div className="group relative w-full h-96">
          <Image src={pic7} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            Road Trip
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            for Porsche Club Poland
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
          Road Trip
          </h3>
        </div>
    </Link>
    
    
    <Link href="/KTM">
        <div className="group relative w-full h-96">
          <Image src={pic13} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
          KTM X-Bow GT-XR
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            for KTM Official
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
          KTM X-Bow GT-XR
          </h3>
        </div>
    </Link>

    <Link href="/OneWay2022">
        <div className="group relative w-full h-96">
          <Image src={pic11} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
          Road Trip
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
          for One Way Club 2022
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
          Road Trip
          </h3>
        </div>
    </Link>

    <Link href="/992-Classic">
        <div className="group relative w-full h-96">
          <Image src={pic19} alt="m1" className="static left-0 top-0 object-center w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
          <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            992 Sport Classic
          </h1>
          <h2 className="absolute font-thin opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl my-2 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
            for Porsche Centrum Katowice
          </h2>
          <h3 className="absolute group-hover:opacity-0 bottom-0 font-light hover:transition duration-300 my-8 mx-8 text-3xl text-fukier-background z-10">
            992 Sport Classic
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

      <Link href="/LaSquadra">
      <div className="group relative w-full h-96 ">
        <Image src={pic12} alt="m3" className="static left-0 top-0 w-full h-full object-cover z-[-1] transition-opacity duration-300 group-hover:opacity-30 cursor-pointer" />
        <h1 className="absolute opacity-0 text-center group-hover:opacity-100 hover:transition-opacity duration-300 md:text-5xl text-2xl top-1/3 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
          Track Day
        </h1>
        <h2 className="absolute opacity-0 text-center font-thin group-hover:opacity-100 hover:transition-opacity duration-300 md:text-4xl md:my-2 my-4 text-2xl top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-10">
          for LaSquadra
        </h2>
        <h3 className="absolute group-hover:opacity-0 bottom-0 hover:transition duration-300 my-8 font-light  mx-8 text-3xl text-fukier-background z-10">
          Track Day
        </h3>
      </div>
      </Link>



    </div>
  );
}
