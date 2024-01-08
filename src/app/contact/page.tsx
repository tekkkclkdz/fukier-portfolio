import NavBar from "../../components/NavBar";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import pic1 from "../../../public/992-classic-webp/DSC08891.webp";
import logo2 from "../../../public/KFlogo_papertealontransparent@1x.svg"


export default function Home() {
  return (
    <div suppressHydrationWarning={true} className="fixed inset-x-0 top-0 h-screen bg-fukier-background">
      <div className='flex flex-col items-center justify-center h-full text-fukier-text font-bold text-3xl space-y-12'>
        <Image src={logo2}  alt="Logo 2" className='absolute top-0 my-28 md:w-80 w-28' />
        <div className='absolute top-1/3 flex flex-col'>
          <Link href="https://www.instagram.com/fukier1/" className="text-3xl text-center font-light text-fukier-text my-28 md:my-40">@FUKIER</Link>
          <h1 className="text-3xl text-fukier-text font-light my-5">FUKIER@GMAIL.COM</h1>
        </div>
      </div>
    </div>
  );
}




