import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import { TypeAnimation } from "react-type-animation";

import heroVideo from "../assets/heroVideo.mp4";

const IndexPage = () => {
    return (
        <Layout>
            <section className="relative h-screen flex flex-col items-center justify-center text-base mx-auto max-w-[2500px] md:text-lg xl:items-start xl:px-0 px-3 sm:px-8 py-8 md:py-24">
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
                    className="text-main text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold w-full px-2 mb-9 xl:text-start xl:ml-44 xl:w-1/2 flex"
                >
                    <TypeAnimation
                        sequence={[
                            "Stwórz swoją wizytówkę w internecie z nami!", // Types 'One'
                            1000, // Waits 1s
                            "Najszybsza technologia na rynku!", // Deletes 'One' and types 'Two'
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
                className="w-full h-auto absolute -z-50"
                width="1906"
                height="408"
                viewBox="0 0 1906 408"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 279.385V15H1906V235.553C1906 235.553 1434.11 32.0459 727.283 295.039C20.4507 558.032 0 279.385 0 279.385Z"
                    fill="url(#paint0_linear_857_691)"
                />
                <path
                    d="M0 264.385V0H1906V220.553C1906 220.553 1434.11 17.0459 727.283 280.039C20.4507 543.032 0 264.385 0 264.385Z"
                    fill="#010000"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_857_691"
                        x1="8.34877e-06"
                        y1="234.454"
                        x2="1896.93"
                        y2="218.64"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop />
                        <stop offset="0.4375" stop-color="#069B15" />
                        <stop offset="1" />
                    </linearGradient>
                </defs>
            </svg>


            <section>
                <p className="text-lg text-orange-500 text-center">
                    CZYM SIE WYRÓZNIAMY?
                </p>
            </section>
            <div className="h-[200vh]"></div>
        </Layout>
    );
};

export const Head = () => <Seo title="Seovileo" />;

export default IndexPage;
