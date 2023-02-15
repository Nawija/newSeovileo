import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

import heroVideo from "../assets/heroVideo.mp4";

const IndexPage = () => (
    <Layout>
        <section className="relative h-screen flex flex-col items-center justify-center text-base mx-auto max-w-[2500px] md:text-lg xl:items-start xl:px-0 px-3 sm:px-8 py-8 md:py-24">
            <video
                className="absolute max-w-[2200px] mx-auto h-full w-full object-cover object-center -z-10"
                src={heroVideo}
                autoPlay
                loop
                muted
            />
            <div class="bg-amber-300 max-w-[2200px] mx-auto mix-blend-multiply absolute h-full w-full -z-10"></div>
            <h1 className="text-main text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold w-full px-6 mb-9 xl:text-start xl:ml-12 xl:w-1/2 flex">
                Stwórz swoją wizytówkę w internecie z nami!
            </h1>
            <div className="flex items-center xl:ml-16">
                <Link
                    className="w-full mx-3 font-semibold md:w-max px-6 py-3 bg-white border-2 border-gray-200 rounded-lg "
                    to="/"
                >
                    Oferta
                </Link>
                <Link
                    className="w-full mx-3 font-semibold md:w-max px-6 py-3 bg-zinc-900 text-main border-2  border-gray-200 rounded-lg "
                    to="/"
                >
                    Zalety
                </Link>
            </div>
            <div className="absolute bottom-9 h-16 w-16 rounded-full p-1 anim-scroll-down fill-zinc-200 xl:left-1/2">
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

        <div className="h-[200vh]"></div>
    </Layout>
);

export const Head = () => <Seo title="Seovileo" />;

export default IndexPage;
