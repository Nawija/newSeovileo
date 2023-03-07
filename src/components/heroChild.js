import * as React from "react";
import heroVideo from "../assets/heroVideo.mp4";


const HeroChild = () => (
    <section className="relative w-full h-24 md:h-52 lg:h-56 max-h-[90rem] flex flex-col items-center justify-center text-base mx-auto max-w-[2200px] md:text-lg xl:items-start xl:px-0 px-3 sm:px-8 py-2 md:py-24 -z-10 pt-24 lg:pt-36">
        <video
            className="lg:fixed absolute top-0 max-w-[2200px] mx-auto h-24 md:h-52 lg:h-56 w-full shadow-2xl object-cover object-center -z-50"
            src={heroVideo}
            type="video/mp4"
            autoPlay
            loop
            muted
        />
    </section>
);

export default HeroChild;
