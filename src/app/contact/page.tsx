import NavBar from "../../components/NavBar"
import Link from "next/link";
import React from "react";
import Image from "next/image";

import pic1 from "../../../public/992-classic-webp/DSC08717a.webp"

export default function Home() {
    return (

        <div className="">
            <div className="relative w-full h-full left-0 top-0">
            <NavBar />
                <Image src={pic1} alt="m" className="sticky left-0 top-0 w-full h-screen object-cover z-[-1] " />
                <Link href="https://www.instagram.com/fukier1/"className="flex justify-center items-center text-8xl font-thin text-fukier-text">@fukier1</Link>
            </div>

           

        </div>




    );
}
