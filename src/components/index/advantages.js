import * as React from "react";
import gatsbySpeed from "../../assets/gatsbySpeed.svg";
import betterCoding from "../../assets/betterCoding.svg";
import efficiency from "../../assets/efficiency.svg";
import seo from "../../assets/seo.svg";

const Responsive = () => (
    <section className="relative w-full flex flex-col items-center justify-center mx-auto text-base md:text-lg px-3 sm:px-8 pt-8 md:pt-24 text-center">
        <div className="sm:px-8 py-2 md:py-12">
            <h3 className=" w-max mx-auto uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
                co nas wyróżnia?
            </h3>
            <h4 className="lineAfter capitalize text-basd sm:text-lg md:text-xl lg:text-2xl text-zinc-500">
                Wysoka wydajność dzięki technologii generacji statycznej i
                innych optymalizacjom
            </h4>
        </div>

        <div className="sm:px-8 py-2 flex flex-col md:flex-row flex-wrap items-center md:items-stretch justify-center text-center">
            <div className=" cards p-2 sm:p-4 md:px-6 rounded-xl mx-4 w-11/12 md:w-1/3 xl:w-1/5 mt-6 shadow-lg">
                <div className="bg-white p-2 rounded-full h-24 w-24 mx-auto shadow-lg">
                    <img
                        className="h-full w-full "
                        src={gatsbySpeed}
                        alt="Rakieta"
                    />
                </div>
                <p className="text-8xl font-medium text-green-600">50%</p>
                <div className=" w-1/3 border-b border-green-500 m-4 mx-auto"></div>
                <p className="text-lg md:text-xl lg:text-2xl font-medium">
                    Większa predkość ładowania strony w porownaniu z konkurencją
                </p>
            </div>
            <div className=" cards p-2 sm:p-4 md:px-6 rounded-xl mx-4 w-11/12 md:w-1/3 xl:w-1/5 mt-6 shadow-lg">
                <div className="bg-white p-2 rounded-full h-24 w-24 mx-auto shadow-lg">
                    <img
                        className="h-full w-full "
                        src={betterCoding}
                        alt="Rakieta"
                    />
                </div>
                <p className="text-8xl font-medium text-green-600">20x</p>
                <div className=" w-1/3 border-b border-green-500 m-4 mx-auto"></div>
                <p className="text-lg md:text-xl lg:text-2xl font-medium">
                    Lepsza optymalizacja kodu strony internetowej vs konkurencja
                </p>
            </div>
            <div className=" cards p-2 sm:p-4 md:px-6 rounded-xl mx-4 w-11/12 md:w-1/3 xl:w-1/5 mt-6 shadow-lg">
                <div className="bg-white p-2 rounded-full h-24 w-24 mx-auto shadow-lg">
                    <img
                        className="h-full w-full "
                        src={efficiency}
                        alt="Rakieta"
                    />
                </div>
                <p className="text-8xl font-medium text-green-600">20x</p>
                <div className=" w-1/3 border-b border-green-500 m-4 mx-auto"></div>
                <p className="text-lg md:text-xl lg:text-2xl font-medium">
                    Większa wydajność strony w porownaniu z konkurencją
                </p>
            </div>
            <div className=" cards p-2 sm:p-4 md:px-6 rounded-xl mx-4 w-11/12 md:w-1/3 xl:w-1/5 mt-6 shadow-lg">
                <div className="bg-white p-2 rounded-full h-24 w-24 mx-auto shadow-lg">
                    <img
                        className="h-full w-full "
                        src={seo}
                        alt="Rakieta"
                    />
                </div>
                <p className="text-8xl font-medium text-green-600">2x</p>
                <div className=" w-1/3 border-b border-green-500 m-4 mx-auto"></div>
                <p className="text-lg md:text-xl lg:text-2xl font-medium">
                    Zwiększenie widoczności "SEO Boost" vs konkurencja
                </p>
            </div>
        </div>
    </section>
);

export default Responsive;
