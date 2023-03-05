import * as React from "react";
import { TypeAnimation } from "react-type-animation";
import heroVideo from "../assets/heroVideo.mp4";

const HeroChild = () => (

    <section className="relative w-full h-32 md:h-60 lg:h-72 max-h-[90rem] flex flex-col items-center justify-center text-base mx-auto max-w-[2200px] md:text-lg xl:items-start xl:px-0 px-3 sm:px-8 py-2 md:py-24 -z-10 pt-24 lg:pt-36">
        <video
            className="lg:fixed absolute top-0 max-w-[2200px] mx-auto h-32 md:h-60 lg:h-72 w-full shadow-2xl object-cover object-center -z-50"
            src={heroVideo}
            type="video/mp4"
            autoPlay
            loop
            muted
        />


        <div class="lg:fixed absolute top-0 bg-amber-300 max-w-[2200px] mx-auto mix-blend-multiply h-32 md:h-60 lg:h-72 w-full -z-50"></div>
        
       
    </section>
);

export default HeroChild;
