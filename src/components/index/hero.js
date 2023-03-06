import * as React from "react";
import { Link } from "gatsby";
import { TypeAnimation } from "react-type-animation";
import heroVideo from "../../assets/heroVideo.webm";

const Hero = () => (

    <section className="relative w-full h-screen max-h-[90rem] flex flex-col items-center justify-center mx-auto max-w-[2200px] xl:items-start xl:px-0 py-2 md:py-24 z-0">
        <video
            className="lg:fixed absolute top-0 max-w-[2200px] mx-auto h-full w-full shadow-2xl object-cover object-center -z-50"
            src={heroVideo}
            type="video/webm"
            autoPlay
            loop
            muted
        />


        <div class="lg:fixed absolute top-0 bg-amber-300 max-w-[2200px] mx-auto mix-blend-multiply h-full w-full -z-50"></div>

            
        <div className="text-main text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold overflow-hidden w-full md:w-3/4 items-center justify-center px-2 mb-9 xl:text-start xl:ml-44 xl:w-1/2 flex">
            <TypeAnimation
                sequence={[
                    "Stwórz swoją wizytówkę w internecie z nami!",
                    2000, // Waits 1s
                    "Najszybsza technologia na rynku!",
                    2000, // Waits 2s
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
            />
        </div>


        <div className="flex items-center xl:ml-44 z-30 absolute bottom-[20%]">


            <Link
                data-sal="flip-up"
                data-sal-delay="700"
                data-sal-duration="1000"
                data-sal-easing="ease"
                className="w-full mx-3 font-semibold md:w-max px-6 py-3 bg-white border-2 border-gray-200 rounded-lg "
                to="/"
            >
                Oferta
            </Link>
            <Link
                data-sal="flip-up"
                data-sal-delay="1000"
                data-sal-duration="1000"
                data-sal-easing="ease"
                className="w-full mx-3 font-semibold md:w-max px-6 py-3 bg-zinc-900 text-main border-2  border-gray-200 rounded-lg "
                to="/"
            >
                Zalety
            </Link>
        </div>
        <div className="absolute bottom-9 h-14 w-14 rounded-full p-1 anim-scroll-down fill-zinc-200/80 xl:left-1/2">
            <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
            >
                <title>Caret Down Circle</title>
                <path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-121.57-17.77l-74.13 89.09a16 16 0 01-24.6 0l-74.13-89.09A16 16 0 01181.86 212h148.28a16 16 0 0112.29 26.23z" />
            </svg>
        </div>
       
    </section>
);

export default Hero;
