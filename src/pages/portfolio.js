import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { useState } from "react";

import HeroChild from "../components/heroChild";

import { StaticImage } from "gatsby-plugin-image";

// svg live iconst desktop tablet and phone
import Desktop from "../assets/liveSvg/desktop.svg";
import Tablet from "../assets/liveSvg/tablet.svg";
import Phone from "../assets/liveSvg/phone.svg";

const Portfolio = () => {
    const [showLive, setLive] = useState(false);
    const [showUrlLive, setUrlLive] = useState();
    const HandleShowLive = () => {
        setLive(!showLive);
    };
    const web1 = () => {
        setLive(!showLive);
        setUrlLive("https://nawija.github.io/web-1/");
    };
    const web2 = () => {
        setLive(!showLive);
        setUrlLive("https://nawija.github.io/web-2/");
    };
    const web3 = () => {
        setLive(!showLive);
        setUrlLive("https://nawija.github.io/v1/");
    };

    let [changeWidthLive, setChangeWidthLive] = useState("h-full w-full");

    const LiveDesktop = () => {
        setChangeWidthLive("h-full w-full");
    };
    const LiveTablet = () => {
        setChangeWidthLive("h-full max-h-[1024px] w-full max-w-[770px]");
    };
    const LivePhone = () => {
        setChangeWidthLive("h-full max-h-[736px] w-full max-w-[414px]");
    };

    return (
        <Layout>
            <HeroChild />

            <div className=" bg-zinc-900 w overflow-hidden w-full z-10">
                <section class="text-gray-600 body-font">
                    <div class="px-5 pt-12 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            {/* web-1 */}
                            <div class=" lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div class="block rounded">
                                    {!showLive ? (
                                        <StaticImage
                                            alt="ecommerce"
                                            className="object-cover object-center w-full h-full block"
                                            src="../assets/portfolio/web1.png"
                                            placeholder="blurred"
                                        />
                                    ) : (
                                        <div className="absolute flex items-center justify-start flex-col bg-black top-0 z-[100] left-0 w-screen h-screen overflow-hidden">
                                            <div className="relative top-0 flex py-1 items-center justify-start lg:justify-center w-full bg-black">
                                                <button
                                                    onClick={HandleShowLive}
                                                    className="absolute top-1/2 right-2 -translate-y-1/2 border border-white py-2 px-4 mx-auto bg-white/10 transition-transform duration-200 rounded-lg text-white hover:bg-black/20 hover:scale-95 z-50"
                                                >
                                                    Zamknij
                                                </button>
                                                <p className="relative left-0 text-start text-white text-xs p-2 w-3/4 lg:hidden">
                                                    Zobacz jak strona wyglada na
                                                    innych uzadzeniach zaloguj
                                                    sie na PC
                                                </p>
                                                <button
                                                    onClick={LiveDesktop}
                                                    className="p-4 hidden lg:flex"
                                                >
                                                    <img
                                                        className="h-6 w-auto"
                                                        src={Desktop}
                                                        alt="PC"
                                                    />
                                                </button>
                                                <button
                                                    onClick={LiveTablet}
                                                    className="p-4 hidden lg:flex"
                                                >
                                                    <img
                                                        className="h-6 w-auto"
                                                        src={Tablet}
                                                        alt="PC"
                                                    />
                                                </button>
                                                <button
                                                    onClick={LivePhone}
                                                    className="p-4 hidden lg:flex"
                                                >
                                                    <img
                                                        className="h-6 w-auto"
                                                        src={Phone}
                                                        alt="PC"
                                                    />
                                                </button>
                                            </div>
                                            <iframe
                                                title="web-1"
                                                className={changeWidthLive}
                                                src={showUrlLive}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div class="flex items-center justify-between pr-1 w-full mt-4">
                                    <button
                                        onClick={web1}
                                        className="border border-white py-2 m-0 px-4 bg-white/10 rounded-lg text-white hover:bg-black/20 transition-transform duration-200 hover:scale-95 z-50"
                                    >
                                        Zobacz Live
                                    </button>
                                    <p className="text-zinc-400">#web-1</p>
                                </div>
                            </div>

                            {/* web-2 */}
                            <div class=" lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div class="block rounded">
                                    {!showLive ? (
                                        <StaticImage
                                            alt="ecommerce"
                                            className="object-cover object-center w-full h-full block"
                                            src="../assets/portfolio/web2.png"
                                            placeholder="blurred"
                                        />
                                    ) : (
                                        <div className="absolute flex items-center justify-start flex-col bg-black top-0 z-[100] left-0 w-screen h-screen">
                                            <div className="relative top-0 flex py-1 items-center justify-start lg:justify-center w-full bg-black">
                                                <button
                                                    onClick={web2}
                                                    className="absolute top-1/2 right-2 -translate-y-1/2 border border-white py-2 px-4 mx-auto bg-white/10 transition-transform duration-200 rounded-lg text-white hover:bg-black/20 hover:scale-95 z-50"
                                                >
                                                    Zamknij
                                                </button>
                                                <p className="relative left-0 text-start text-white text-xs p-2 w-3/4 lg:hidden">
                                                    Zobacz jak strona wyglada na
                                                    innych uzadzeniach zaloguj
                                                    sie na PC
                                                </p>
                                                <button
                                                    onClick={LiveDesktop}
                                                    className="p-4 hidden lg:flex"
                                                >
                                                    <img
                                                        className="h-6 w-auto"
                                                        src={Desktop}
                                                        alt="PC"
                                                    />
                                                </button>
                                                <button
                                                    onClick={LiveTablet}
                                                    className="p-4 hidden lg:flex"
                                                >
                                                    <img
                                                        className="h-6 w-auto"
                                                        src={Tablet}
                                                        alt="PC"
                                                    />
                                                </button>
                                                <button
                                                    onClick={LivePhone}
                                                    className="p-4 hidden lg:flex"
                                                >
                                                    <img
                                                        className="h-6 w-auto"
                                                        src={Phone}
                                                        alt="PC"
                                                    />
                                                </button>
                                            </div>
                                            <iframe
                                                title="web-2"
                                                className={changeWidthLive}
                                                src={showUrlLive}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div class="flex items-center justify-between pr-1 w-full mt-4">
                                    <button
                                        onClick={web2}
                                        className="border border-white py-2 m-0 px-4 bg-white/10 rounded-lg text-white hover:bg-black/20 transition-transform duration-200 hover:scale-95 z-50"
                                    >
                                        Zobacz Live
                                    </button>
                                    <p className="text-zinc-400">#web-2</p>
                                </div>
                            </div>

                            {/* web-3 */}
                            <div class=" lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div class="block rounded">
                                    {!showLive ? (
                                        <StaticImage
                                            alt="ecommerce"
                                            className="object-cover object-center w-full h-full block"
                                            src="../assets/portfolio/web3.png"
                                            placeholder="blurred"
                                        />
                                    ) : (
                                        <div className="absolute flex items-center justify-start flex-col bg-black top-0 z-[100] left-0 w-screen h-screen">
                                            <div className="relative top-0 flex py-1 items-center justify-start lg:justify-center w-full bg-black">
                                                <button
                                                    onClick={web3}
                                                    className="absolute top-1/2 right-2 -translate-y-1/2 border border-white py-2 px-4 mx-auto bg-white/10 transition-transform duration-200 rounded-lg text-white hover:bg-black/20 hover:scale-95 z-50"
                                                >
                                                    Zamknij
                                                </button>
                                                <p className="relative left-0 text-start text-white text-xs p-2 w-3/4 lg:hidden">
                                                    Zobacz jak strona wyglada na
                                                    innych uzadzeniach zaloguj
                                                    sie na PC
                                                </p>
                                                <button
                                                    onClick={LiveDesktop}
                                                    className="p-4 hidden lg:flex"
                                                >
                                                    <img
                                                        className="h-6 w-auto"
                                                        src={Desktop}
                                                        alt="PC"
                                                    />
                                                </button>
                                                <button
                                                    onClick={LiveTablet}
                                                    className="p-4 hidden lg:flex"
                                                >
                                                    <img
                                                        className="h-6 w-auto"
                                                        src={Tablet}
                                                        alt="PC"
                                                    />
                                                </button>
                                                <button
                                                    onClick={LivePhone}
                                                    className="p-4 hidden lg:flex"
                                                >
                                                    <img
                                                        className="h-6 w-auto"
                                                        src={Phone}
                                                        alt="PC"
                                                    />
                                                </button>
                                            </div>
                                            <iframe
                                                title="web-3"
                                                className={changeWidthLive}
                                                src={showUrlLive}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div class="flex items-center justify-between pr-1 w-full mt-4">
                                    <button
                                        onClick={web3}
                                        className="border border-white py-2 m-0 px-4 bg-white/10 rounded-lg text-white hover:bg-black/20 transition-transform duration-200 hover:scale-95 z-50"
                                    >
                                        Zobacz Live
                                    </button>
                                    <p className="text-zinc-400">#web-3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="Portfolio" />;

export default Portfolio;
