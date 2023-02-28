import * as React from "react";
import gatsbySpeed from "../../assets/gatsbySpeed.svg";
import betterCoding from "../../assets/betterCoding.svg";
import efficiency from "../../assets/efficiency.svg";
import seo from "../../assets/seo.svg";

const Responsive = () => (
    <section className="relative w-full flex flex-col items-center justify-center mx-auto text-base md:text-lg px-3 sm:px-8 pt-8 md:pt-24 text-center text-white">
        <div className="sm:px-8 py-2 md:py-12">
            <h3 className=" w-max mx-auto uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                co nas wyróżnia?
            </h3>
            <h4 className="lineAfter capitalize text-base md:text-lg lg:text-xl">
                Wysoka wydajność dzięki technologii generacji statycznej i
                innych optymalizacjom
            </h4>
        </div>

        <div className="sm:px-12 py-2 lg:px-4 flex flex-col md:flex-row flex-wrap items-center md:items-stretch justify-center text-center max-w-screen-2xl">
            <div className="relative shadow-zinc-300/20 shadow-md flex items-center justify-center flex-col overflow-hidden py-8 px-4 md:p-6 rounded-xl mx-4 w-10/12 md:w-8/12 lg:w-1/3 xl:w-1/5 mt-6 z-0">
                <div className="cards bg-black/70 xl:bg-black/20  -z-10"></div>
                <div className="bg-white p-2 rounded-full h-16 w-16 mx-auto shadow-lg">
                    <img
                        className="h-full w-full "
                        src={gatsbySpeed}
                        alt="Rakieta"
                    />
                </div>
                <p className="text-7xl mt-3 font-medium text-green-600 cardDigitChangeColor">50%</p>
                <div className=" w-1/3 border-b border-green-500 borderUnderCardDigit m-4 mx-auto"></div>
                <p className="text-base md:text-lg lg:text-xl font-medium">
                    Większa predkość ładowania strony w porownaniu z konkurencją
                </p>
            </div>
            <div className="relative shadow-zinc-300/20 shadow-md flex items-center justify-center flex-col overflow-hidden py-8 px-4 md:p-6 rounded-xl mx-4 w-10/12 md:w-8/12 lg:w-1/3 xl:w-1/5 mt-6 z-0">
                <div className="cards bg-black/70 xl:bg-black/20 -z-10"></div>
                <div className="bg-white p-2 rounded-full h-16 w-16 mx-auto shadow-lg">
                    <img
                        className="h-full w-full "
                        src={betterCoding}
                        alt="Rakieta"
                    />
                </div>
                <p className="text-7xl mt-3 font-medium text-green-600 cardDigitChangeColor">20x</p>
                <div className=" w-1/3 border-b border-green-500 borderUnderCardDigit m-4 mx-auto"></div>
                <p className="text-base md:text-lg lg:text-xl font-medium">
                    Lepsza optymalizacja kodu strony internetowej vs konkurencja
                </p>
            </div>
            <div className="relative shadow-zinc-300/20 shadow-md flex items-center justify-center flex-col overflow-hidden py-8 px-4 md:p-6 rounded-xl mx-4 w-10/12 md:w-8/12 lg:w-1/3 xl:w-1/5 mt-6 z-0">
                <div className="cards bg-black/70 xl:bg-black/20 -z-10"></div>
                <div className="bg-white p-2 rounded-full h-16 w-16 mx-auto shadow-lg">
                    <img
                        className="h-full w-full "
                        src={efficiency}
                        alt="Rakieta"
                    />
                </div>
                <p className="text-7xl mt-3 font-medium text-green-600 cardDigitChangeColor">20x</p>
                <div className=" w-1/3 border-b border-green-500 borderUnderCardDigit m-4 mx-auto"></div>
                <p className="text-base md:text-lg lg:text-xl font-medium">
                    Większa wydajność strony w porownaniu z konkurencją
                </p>
            </div>
            <div className="relative shadow-zinc-300/20 shadow-md flex items-center justify-center flex-col overflow-hidden py-8 px-4 md:p-6 rounded-xl mx-4 w-10/12 md:w-8/12 lg:w-1/3 xl:w-1/5 mt-6 z-0">
                <div className="cards bg-black/70 xl:bg-black/20  -z-10"></div>
                <div className="bg-white p-2 rounded-full h-16 w-16 mx-auto shadow-lg">
                    <img className="h-full w-full " src={seo} alt="Rakieta" />
                </div>
                <p className="text-7xl mt-3 font-medium text-green-600 cardDigitChangeColor">2x</p>
                <div className=" w-1/3 border-b border-green-500 borderUnderCardDigit m-4 mx-auto"></div>
                <p className="text-base md:text-lg lg:text-xl font-medium">
                    Zwiększenie widoczności "SEO Boost" vs konkurencja
                </p>
            </div>
        </div>
    </section>
);

export default Responsive;
