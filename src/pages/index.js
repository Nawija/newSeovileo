import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import { TypeAnimation } from "react-type-animation";

import heroVideo from "../assets/heroVideo.mp4";
import highSpeed from "../assets/icons/high-speed.png";

const IndexPage = () => {
    return (
        <Layout>
            <section className="relative h-screen flex flex-col items-center justify-center text-base mx-auto max-w-[2500px] md:text-lg xl:items-start xl:px-0 px-3 sm:px-8 py-2 md:py-24">
                <video
                    className="absolute max-w-[2200px] mx-auto h-full w-full object-cover object-center -z-10"
                    src={heroVideo}
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                />

                <div class="bg-amber-300 max-w-[2200px] mx-auto mix-blend-multiply absolute h-full w-full -z-10"></div>
                <h2
                    data-sal="slide-up"
                    data-sal-delay="400"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    className="text-main text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold w-full items-center justify-center px-2 mb-9 xl:text-start xl:ml-44 xl:w-1/2 flex"
                >
                    <TypeAnimation
                        sequence={[
                            "Stwórz swoją wizytówkę w internecie z nami!",
                            2000, // Waits 1s
                            "Najszybsza technologia na rynku!",
                            2000, // Waits 2s
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ height: "30vh" }}
                    />
                </h2>
                <div className="flex items-center xl:ml-44">
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

            <svg
                className="h-auto w-full absolute -z-50"
                width="1906"
                height="706"
                viewBox="0 0 1906 706"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 0H1906V644.911C1906 644.911 1037.5 782.361 953 644.911C868.5 507.462 0 644.911 0 644.911V0Z"
                    fill="url(#paint0_linear_865_91)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_865_91"
                        x1="1589"
                        y1="37.0001"
                        x2="449"
                        y2="409"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#031500" />
                        <stop offset="1" stop-color="#010000" />
                    </linearGradient>
                </defs>
            </svg>
            <section className="relative flex flex-col items-center justify-center text-base mx-auto max-w-screen-2xl md:text-lg px-3 sm:px-8 py-2 md:py-24 text-white z-10">
                <h3 className="text-white text-xl mt-6 md:text-3xl lg:text-4xl  md:mt-0">CZYM SIE WYRÓZNIAMY?</h3>
                <div className="flex items-center w-full mt-6 justify-center flex-col md:flex-row flex-wrap">
                    <div className="w-full flex items-center justify-center flex-col bg-slate-50"><img className="h-24 fill-amber-400 w-auto " src={highSpeed} /></div>
                </div>
            </section>
            <div className="h-[200vh]"></div>
        </Layout>
    );
};

export const Head = () => <Seo title="Seovileo" />;

export default IndexPage;
