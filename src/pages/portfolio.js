import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { useState } from "react";

import HeroChild from "../components/heroChild";
import test from "../assets/test.png"
const Portfolio = () => {
    const [showLive, setLive] = useState(false);
    const HandleShowLive = () => {
        setLive(!showLive);
    };
    const [showLiveTablet, setLiveTablet] = useState(false);
    const HandleShowLiveTablet = () => {
        setLiveTablet(!showLiveTablet);
    };

    return (
        <Layout>
            <HeroChild />
            <div className=" bg-zinc-900 overflow-hidden w-full z-10">
                <section class="text-gray-600 body-font">
                    <div class="px-5 pt-12 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            <div class=" lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div class="block rounded">
                                    {!showLive ? (
                                        <img
                                            alt="ecommerce"
                                            className="object-cover object-center w-full h-full block"
                                            src={test} alt="test"
                                        />
                                    ) : (
                                        <div className="absolute flex items-center justify-center flex-col bg-black top-0 z-[100] left-0 w-screen h-screen">
                                            <div className="bg-black">
                                                <button
                                                    onClick={HandleShowLive}
                                                    className="border border-white py-2 px-4 mx-auto bg-white/10 rounded-lg text-white hover:bg-black/20 hover:scale-95 z-50"
                                                >
                                                    Zamknij
                                                </button>
                                                <button
                                                    className="text-white p-4"
                                                    onClick={
                                                        HandleShowLiveTablet
                                                    }
                                                >
                                                    Tablet
                                                </button>
                                            </div>
                                            <iframe
                                                className={
                                                    !showLiveTablet
                                                        ? "h-full w-full"
                                                        : "h-full w-1/2"
                                                }
                                                src="https://nawija.github.io/web-1/"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div class=" mt-4">
                                    <button
                                        onClick={HandleShowLive}
                                        className="border border-white py-2 px-4 mx-auto bg-white/10 rounded-lg text-white hover:bg-black/20 hover:scale-95 z-50"
                                    >
                                        Zobacz Live
                                    </button>
                                </div>
                            </div>

                            <div class=" lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div class="block h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        class="object-cover object-center w-full h-full block"
                                        src="https://dummyimage.com/420x260"
                                    />
                                </div>
                                <div class=" mt-4">
                                    <button
                                        onClick={HandleShowLive}
                                        className="border border-white py-2 px-4 mx-auto bg-white/10 rounded-lg text-white hover:bg-black/20 hover:scale-95"
                                    >
                                        Zobacz Live
                                    </button>
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
