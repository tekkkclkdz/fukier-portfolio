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

// import pic1 from "../../../public/concorso-webp/53Plik_.webp"
// import pic2 from "../../../public/concorso-webp/94069-2.webp"
// import pic3 from "../../../public/concorso-webp/DSC09127.webp"
// import pic4 from "../../../public/concorso-webp/DSC09160.webp"
// import pic5 from "../../../public/concorso-webp/DSC09161.webp"
// import pic6 from "../../../public/concorso-webp/DSC09209.webp"
// import pic7 from "../../../public/concorso-webp/DSC09265.webp"
// import pic8 from "../../../public/concorso-webp/DSC09291.webp"
// import pic9 from "../../../public/concorso-webp/DSC09343.webp"
// import pic10 from "../../../public/concorso-webp/DSC09462.webp"
// import pic11 from "../../../public/concorso-webp/DSC09639.webp"
// import pic12 from "../../../public/concorso-webp/DSC09691.webp"
// import pic13 from "../../../public/esperienza-webp/Esperienza55.webp"
// import pic14 from "../../../public/esperienza-webp/Esperienza65.webp"
// import pic15 from "../../../public/esperienza-webp/Esperienza67.webp"
// import pic16 from "../../../public/esperienza-webp/Esperienza68.webp"
// import pic17 from "../../../public/esperienza-webp/Esperienza78.webp"
// import pic18 from "../../../public/esperienza-webp/Esperienza91.webp"
// import pic19 from "../../../public/esperienza-webp/Esperienza103.webp"
// import pic20 from "../../../public/ktm-webp/ktm1.webp"
// import pic21 from "../../../public/ktm-webp/ktm7.webp"
// import pic22 from "../../../public/ktm-webp/ktm8.webp"
// import pic23 from "../../../public/ktm-webp/ktm10.webp"
// import pic24 from "../../../public/ktm-webp/ktm14.webp"
// import pic25 from "../../../public/ktm-webp/ktm17.webp"
// import pic26 from "../../../public/laSquadra-webp/DSC02827.webp";
// import pic27 from "../../../public/laSquadra-webp/DSC02977.webp";
// import pic28 from "../../../public/laSquadra-webp/DSC03136.webp";
// import pic29 from "../../../public/laSquadra-webp/DSC03254.webp";
// import pic30 from "../../../public/laSquadra-webp/DSC03341.webp";
// import pic31 from "../../../public/laSquadra-webp/DSC03458.webp";
// import pic32 from "../../../public/laSquadra-webp/DSC03495.webp";
// import pic33 from "../../../public/laSquadra-webp/DSC03513.webp";
// import pic34 from "../../../public/laSquadra-webp/DSC03763.webp";
// import pic35 from "../../../public/m4-csl-webp/45678.webp";
// import pic36 from "../../../public/m4-csl-webp/csl.webp";
// import pic37 from "../../../public/m4-csl-webp/csl193.webp";
// import pic38 from "../../../public/m4-csl-webp/csl296.webp";
// import pic39 from "../../../public/OneWay2022/oneway6.webp";
// import pic40 from "../../../public/OneWay2022/oneway9.webp";
// import pic41 from "../../../public/OneWay2022/oneway21.webp";
// import pic42 from "../../../public/OneWay2022/oneway23.webp";
// import pic43 from "../../../public/OneWay2022/oneway43.webp";
// import pic44 from "../../../public/OneWay2022/oneway48.webp";
// import pic45 from "../../../public/OneWay2022/oneway50.webp";
// import pic46 from "../../../public/OneWay2022/oneway55.webp";
// import pic47 from "../../../public/OneWay2022/oneway56.webp";
// import pic48 from "../../../public/OneWay2023-webp/DSC04686.webp";
// import pic49 from "../../../public/OneWay2023-webp/DSC05152.webp";
// import pic50 from "../../../public/OneWay2023-webp/DSC05358.webp";
// import pic51 from "../../../public/OneWay2023-webp/DSC05388.webp";
// import pic52 from "../../../public/OneWay2023-webp/DSC05494.webp";
// import pic53 from "../../../public/OneWay2023-webp/DSC05524.webp";
// import pic54 from "../../../public/OneWay2023-webp/DSC05563.webp";
// import pic55 from "../../../public/OneWay2023-webp/DSC05580.webp";
// import pic56 from "../../../public/pagani-webp/DSC09095.webp";
// import pic57 from "../../../public/pagani-webp/DSC09121.webp";
// import pic58 from "../../../public/pagani-webp/DSC09131.webp";
// import pic59 from "../../../public/pagani-webp/DSC09145p.webp";
// import pic60 from "../../../public/pagani-webp/DSC09169.webp";
// import pic61 from "../../../public/pagani-webp/DSC09174-2.webp";
// import pic62 from "../../../public/pagani-webp/DSC09189.webp";
// import pic63 from "../../../public/pagani-webp/DSC09199.webp";
// import pic64 from "../../../public/pagani-webp/DSC09216.webp";
// import pic65 from "../../../public/pagani-webp/DSC09220.webp";
// import pic66 from "../../../public/Porsche-club-webp/DSC07716.webp";
// import pic67 from "../../../public/Porsche-club-webp/DSC07793.webp";
// import pic68 from "../../../public/Porsche-club-webp/DSC08555.webp";
// import pic69 from "../../../public/Porsche-club-webp/DSC08618.webp";
// import pic70 from "../../../public/Porsche-club-webp/DSC08632.webp";
// import pic71 from "../../../public/Porsche-club-webp/DSC08650.webp";
// import pic72 from "../../../public/Porsche-roadtour-webp/DSC02481-kopia.webp";
// import pic73 from "../../../public/Porsche-roadtour-webp/DSC02552.webp";
// import pic74 from "../../../public/Porsche-roadtour-webp/DSC02565.webp";
// import pic75 from "../../../public/Porsche-roadtour-webp/PRD8.webp";
// import pic76 from "../../../public/Porsche-roadtour-webp/PRD32.webp";
// import pic77 from "../../../public/Porsche-roadtour-webp/PRD37.webp";
// import pic78 from "../../../public/Porsche-roadtour-webp/PRD40.webp";
// import pic79 from "../../../public/portfolio-webp/DSC00545.webp";
// import pic80 from "../../../public/portfolio-webp/DSC00599.webp";
// import pic81 from "../../../public/portfolio-webp/DSC00924.webp";
// import pic82 from "../../../public/portfolio-webp/DSC00934.webp";
// import pic83 from "../../../public/portfolio-webp/DSC00938.webp";
// import pic84 from "../../../public/portfolio-webp/DSC00952-Edit.webp";
// import pic85 from "../../../public/portfolio-webp/DSC00989.webp";
// import pic86 from "../../../public/portfolio-webp/DSC02429.webp";
// import pic87 from "../../../public/portfolio-webp/DSC02437.webp";
// import pic88 from "../../../public/portfolio-webp/DSC02442.webp";
// import pic89 from "../../../public/portfolio-webp/DSC02618.webp";
// import pic90 from "../../../public/portfolio-webp/DSC04308-Edit-2.webp";
// import pic91 from "../../../public/portfolio-webp/DSC04330.webp";
// import pic92 from "../../../public/portfolio-webp/DSC06643.webp";
// import pic93 from "../../../public/portfolio-webp/DSC09436.webp";
// import pic94 from "../../../public/portfolio-webp/DSC09451.webp";
// import pic95 from "../../../public/portfolio-webp/DSC09675.webp";
// import pic96 from "../../../public/portfolio-webp/DSC09688.webp";
// import pic97 from "../../../public/portfolio-webp/DSC09737.webp";
// import pic98 from "../../../public/portfolio-webp/ktm21.webp";
// import pic99 from "../../../public/portfolio-webp/srt25.webp";
// import pic100 from "../../../public/Richter-webp/Richter12.webp";
// import pic101 from "../../../public/Richter-webp/Richter14.webp";
// import pic102 from "../../../public/Richter-webp/Richter18.webp";
// import pic103 from "../../../public/Richter-webp/Richter19.webp";
// import pic104 from "../../../public/Richter-webp/Richter20.webp";
// import pic105 from "../../../public/Richter-webp/Richter21.webp";
// import pic106 from "../../../public/Richter-webp/Richter22.webp";
// import pic107 from "../../../public/Richter-webp/Richter27.webp";
// import pic108 from "../../../public/RollsRoyce-webp/DSC02490.webp";
// import pic109 from "../../../public/RollsRoyce-webp/DSC02569.webp";
// import pic110 from "../../../public/RollsRoyce-webp/fukier3.webp";
// import pic111 from "../../../public/RollsRoyce-webp/fukier4.webp";
// import pic112 from "../../../public/RollsRoyce-webp/fukier5.webp";
// import pic113 from "../../../public/RollsRoyce-webp/fukier6.webp";
// import pic114 from "../../../public/RollsRoyce-webp/fukier12.webp";
// import pic115 from "../../../public/RollsRoyce-webp/fukier13.webp";
// import pic116 from "../../../public/Taycan-webp/Taycan5.webp";
// import pic117 from "../../../public/Taycan-webp/Taycan6.webp";
// import pic118 from "../../../public/Taycan-webp/Taycan7.webp";
// import pic119 from "../../../public/Taycan-webp/Taycan8.webp";
// import pic120 from "../../../public/Taycan-webp/Taycan9.webp";
// import pic121 from "../../../public/Taycan-webp/Taycan12.webp";
// import pic122 from "../../../public/Taycan-webp/Taycan16.webp";
// import pic123 from "../../../public/Taycan-webp/Taycan18.webp";
// import pic124 from "../../../public/Taycan-webp/Taycan19.webp";
// import pic125 from "../../../public/992-classic-webp/DSC08431.webp";
// import pic126 from "../../../public/992-classic-webp/DSC08443.webp";
// import pic127 from "../../../public/992-classic-webp/DSC08446.webp";
// import pic128 from "../../../public/992-classic-webp/DSC08487.webp";
// import pic129 from "../../../public/992-classic-webp/DSC08524.webp";
// import pic130 from "../../../public/992-classic-webp/DSC08533.webp";
// import pic131 from "../../../public/992-classic-webp/DSC08608.webp";
// import pic132 from "../../../public/992-classic-webp/DSC08693a.webp";
// import pic133 from "../../../public/992-classic-webp/DSC08700.webp";
// import pic134 from "../../../public/992-classic-webp/DSC08700a.webp";
// import pic135 from "../../../public/992-classic-webp/DSC08717a.webp";
// import pic136 from "../../../public/992-classic-webp/DSC08891.webp";
// import pic137 from "../../../public/alpine-webp/DSC04959.webp";
// import pic138 from "../../../public/alpine-webp/DSC05014.webp";
// import pic139 from "../../../public/alpine-webp/DSC05026.webp";
// import pic140 from "../../../public/alpine-webp/DSC05041.webp";
// import pic141 from "../../../public/alpine-webp/DSC05124.webp";
// import pic142 from "../../../public/alpine-webp/DSC05173.webp";
// import pic143 from "../../../public/alpine-webp/DSC05406.webp";
// import pic144 from "../../../public/bmw-individual-webp/11.webp";
// import pic145 from "../../../public/bmw-individual-webp/13.webp";
// import pic146 from "../../../public/bmw-individual-webp/15.webp";
// import pic147 from "../../../public/bmw-individual-webp/16.webp";
// import pic148 from "../../../public/bmw-individual-webp/111.webp";
// import pic149 from "../../../public/bmw-individual-webp/112.webp";
// import pic150 from "../../../public/bmw-m5-webp/67-05716.webp";
// import pic151 from "../../../public/bmw-m5-webp/67-06613.webp";
// import pic152 from "../../../public/bmw-m5-webp/67-07042-2.webp";


import pic1 from "../../../public/portfolio2-webp/48mday-kopia.webp";
import pic2 from "../../../public/portfolio2-webp/67-04104-kopia.webp";
import pic3 from "../../../public/portfolio2-webp/111-kopia 2.webp";
import pic4 from "../../../public/portfolio2-webp/222Plik_-kopia.webp";
import pic5 from "../../../public/portfolio2-webp/1777er-kopia.webp";
import pic6 from "../../../public/portfolio2-webp/9169-kopia.webp";
import pic7 from "../../../public/portfolio2-webp/16669-kopia.webp";
import pic8 from "../../../public/portfolio2-webp/62769-kopia.webp";
import pic9 from "../../../public/portfolio2-webp/94069-2-kopia.webp";
import pic10 from "../../../public/portfolio2-webp/csl296-kopia 2.webp";
import pic11 from "../../../public/portfolio2-webp/dbx4-kopia.webp";
import pic12 from "../../../public/portfolio2-webp/DSC00545.webp";
import pic13 from "../../../public/portfolio2-webp/DSC00599.webp";
import pic14 from "../../../public/portfolio2-webp/DSC00934.webp";
import pic15 from "../../../public/portfolio2-webp/DSC00952-Edit.webp";
import pic16 from "../../../public/portfolio2-webp/DSC01011-kopia 2.webp";
import pic17 from "../../../public/portfolio2-webp/DSC01275-Edit-kopia 2.webp";
import pic18 from "../../../public/portfolio2-webp/DSC01398.webp";
import pic19 from "../../../public/portfolio2-webp/DSC01400.webp";
import pic20 from "../../../public/portfolio2-webp/DSC01527-kopia.webp";
import pic21 from "../../../public/portfolio2-webp/DSC01756-kopia.webp";
import pic22 from "../../../public/portfolio2-webp/DSC01794.webp";
import pic23 from "../../../public/portfolio2-webp/DSC01927-kopia.webp";
import pic24 from "../../../public/portfolio2-webp/DSC02618.webp";
import pic25 from "../../../public/portfolio2-webp/DSC02682-Poprawione-Szum.webp";
import pic26 from "../../../public/portfolio2-webp/DSC03449-kopia.webp";
import pic27 from "../../../public/portfolio2-webp/DSC03723-Poprawione-Szum.webp";
import pic28 from "../../../public/portfolio2-webp/DSC04048-kopia.webp";
import pic29 from "../../../public/portfolio2-webp/DSC04171-Poprawione-Szum.webp";
import pic30 from "../../../public/portfolio2-webp/DSC04279-Edit-kopia.webp";
import pic31 from "../../../public/portfolio2-webp/DSC04308-Edit-2.webp";
import pic32 from "../../../public/portfolio2-webp/DSC04330.webp";
import pic33 from "../../../public/portfolio2-webp/DSC04846-kopia.webp";
import pic34 from "../../../public/portfolio2-webp/DSC04959-kopia.webp";
import pic35 from "../../../public/portfolio2-webp/DSC05014-kopia.webp";
import pic36 from "../../../public/portfolio2-webp/DSC05152-kopia 2.webp";
import pic37 from "../../../public/portfolio2-webp/DSC06643.webp";
import pic38 from "../../../public/portfolio2-webp/DSC07332-kopia.webp";
import pic39 from "../../../public/portfolio2-webp/DSC07436.webp";
import pic40 from "../../../public/portfolio2-webp/DSC07617-kopia.webp";
import pic41 from "../../../public/portfolio2-webp/DSC07657-kopia.webp";
import pic42 from "../../../public/portfolio2-webp/DSC07680-kopia.webp";
import pic43 from "../../../public/portfolio2-webp/DSC08151.webp";
import pic44 from "../../../public/portfolio2-webp/DSC08693a.webp";
import pic45 from "../../../public/portfolio2-webp/DSC08918-2-kopia.webp";
import pic46 from "../../../public/portfolio2-webp/DSC08989-kopia.webp";
import pic47 from "../../../public/portfolio2-webp/DSC08996-kopia.webp";
import pic48 from "../../../public/portfolio2-webp/DSC09026-kopia.webp";
import pic49 from "../../../public/portfolio2-webp/DSC09131-kopia.webp";
import pic50 from "../../../public/portfolio2-webp/DSC09174-2-kopia.webp";
import pic51 from "../../../public/portfolio2-webp/DSC09216-kopia.webp";
import pic52 from "../../../public/portfolio2-webp/DSC09220-kopia.webp";
import pic53 from "../../../public/portfolio2-webp/DSC09343.webp";
import pic54 from "../../../public/portfolio2-webp/DSC09355g-kopia.webp";
import pic55 from "../../../public/portfolio2-webp/DSC09451.webp";
import pic56 from "../../../public/portfolio2-webp/DSC09462-kopia.webp";
import pic57 from "../../../public/portfolio2-webp/DSC09535i-kopia.webp";
import pic58 from "../../../public/portfolio2-webp/DSC09579-kopia.webp";
import pic59 from "../../../public/portfolio2-webp/DSC09622x-kopia.webp";
import pic60 from "../../../public/portfolio2-webp/DSC09675.webp";
import pic61 from "../../../public/portfolio2-webp/DSC09681i-kopia.webp";
import pic62 from "../../../public/portfolio2-webp/DSC09688.webp";
import pic63 from "../../../public/portfolio2-webp/DSC09728i-Poprawione-Szum-kopia.webp";
import pic64 from "../../../public/portfolio2-webp/DSC09757-kopia.webp";
import pic65 from "../../../public/portfolio2-webp/DSC09779x-Edit-kopia.webp";
import pic66 from "../../../public/portfolio2-webp/Esperienza65-kopia.webp";
import pic67 from "../../../public/portfolio2-webp/fukier13-kopia.webp";
import pic68 from "../../../public/portfolio2-webp/G16-kopia.webp";
import pic69 from "../../../public/portfolio2-webp/GT323-kopia.webp";
import pic70 from "../../../public/portfolio2-webp/GT331-kopia.webp";
import pic71 from "../../../public/portfolio2-webp/GT332-kopia.webp";
import pic72 from "../../../public/portfolio2-webp/kon14-kopia.webp";
import pic73 from "../../../public/portfolio2-webp/ktm21.webp";
import pic74 from "../../../public/portfolio2-webp/Richter17-kopia.webp";
import pic75 from "../../../public/portfolio2-webp/Taycan6-kopia 2.webp";
import pic76 from "../../../public/portfolio2-webp/Taycan8-kopia 2.webp";


// pic71, pic72, pic73, pic74, pic75, pic76, pic77, pic78, pic79, pic80,
//     pic81, pic82, pic83, pic84, pic85, pic86, pic87, pic88, pic89, pic90,
//     pic91, pic92, pic93, pic94, pic95, pic96, pic97, pic98, pic99, pic100,
//     pic101, pic102, pic103, pic104, pic105, pic106, pic107, pic108, pic109, pic110,
//     pic111, pic112, pic113, pic114, pic115, pic116, pic117, pic118, pic119, pic120,
//     pic121, pic122, pic123, pic124, pic125, pic126, pic127, pic128, pic129, pic130,
//     pic131, pic132, pic133, pic134, pic135, pic136, pic137, pic138, pic139, pic140,
//     pic141, pic142, pic143, pic144, pic145, pic146, pic147, pic148, pic149, pic150,
//     pic151, pic152




const pictures = [
    pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10,
    pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20,
    pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28, pic29, pic30,
    pic31, pic32, pic33, pic34, pic35, pic36, pic37, pic38, pic39, pic40,
    pic41, pic42, pic43, pic44, pic45, pic46, pic47, pic48, pic49, pic50,
    pic51, pic52, pic53, pic54, pic55, pic56, pic57, pic58, pic59, pic60,
    pic61, pic62, pic63, pic64, pic65, pic66, pic67, pic68, pic69, pic70,
    pic71, pic72, pic73, pic74, pic75, pic76
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
  
  








