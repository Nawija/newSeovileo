import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import YesGreen from "../../assets/YesGreen.svg";

const WhyGatsby = () => (

    <section className="relative w-full flex flex-col items-center justify-center mx-auto py-8 lg:py-24">
        <div className="flex items-center justify-center w-full">
            <div className="absolute -z-10 w-full max-w-screen-[2200px]">
            <StaticImage class="h-full opacity-30 w-full object-center object-cover" src="../../assets/background/bgWhyGatsby.jpg" />
            </div>
            <div className="w-full max-w-screen-md">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase font-semibold mb-2 text-center changeColor text-green-500 ">
                    Dlaczego warto zainwestować w stronę opartą na GatsbyJS?
                </h2>
                <h5 className="text-base md:text-lg text-center">
                    Inwestycja w stronę zakodowaną na GatsbyJS jest tego warta
                    przede wszystkim z powodu jej wysokiej wydajności i większej
                    szansy na zrealizowanie postawionych sobie celów biznesowych
                    Strony powstające przy wykorzystaniu Gatsbiego działają
                    płynnie, a ich czas ładowania jest błyskawiczny w porównaniu
                    do starszych technologii takich jak Joomla, Drupal, stron
                    opartych na gotowych motywach
                </h5>
            </div>
        </div>
        <div className="relative max-w-screen-2xl w-full flex flex-col lg:flex-row items-center justify-center mx-auto text-base md:text-lg px-3 sm:px-8 pt-6 lg:pt-12">
            <div className="relative w-full lg:w-[80%] px-2 md:px-12 sm:px-8 py-2 md:py-12">

                <StaticImage
                    placeholder="blurred"
                    className=" w-full h-full z-30"
                    src="../../assets/iPadPro.png"
                    alt="iPad Pro z wizytówka strony seovileo"
                />
            </div>
            <div className="w-full flex flex-col items-start justify-start lg:w-1/2 lg:ml-12 px-2 lg:px-1 md:px-4 sm:px-8 py-4 md:py-12 rounded-full z-20 text-start">
                <div className="flex items-center justify-center mb-6">
                    <img
                        className="h-[3rem] sm:h-[4rem] lg:h-[5rem] w-[3rem] sm:w-[4rem] lg:w-[5rem] mr-2"
                        src={YesGreen}
                        alt="Znak na Tak"
                    />
                    <p className="text-base md:text-lg font-semibold">
                        Szybkie działanie strony, co wiąże się z potencjalnie
                        wyższymi wynikami sprzedażowymi
                    </p>
                </div>
                <div className="flex items-center justify-center mb-6">
                    <img
                        className="h-[3rem] sm:h-[4rem] lg:h-[5rem] w-[3rem] sm:w-[4rem] lg:w-[5rem] mr-2"
                        src={YesGreen}
                        alt="Znak na Tak"
                    />
                    <p className="text-base md:text-lg font-semibold">
                        Odseparowanie Front i Back-Endu zabezpiecza treść strony
                        internetowej w razie problemów na serwerze
                    </p>
                </div>
                <div className="flex items-center justify-center mb-6">
                    <img
                        className="h-[3rem] sm:h-[4rem] lg:h-[5rem] w-[3rem] sm:w-[4rem] lg:w-[5rem] mr-2"
                        src={YesGreen}
                        alt="Znak na Tak"
                    />
                    <p className="text-base md:text-lg font-semibold">
                        Duża stabilność
                    </p>
                </div>
                <div className="flex items-center justify-center mb-6">
                    <img
                        className="h-[3rem] sm:h-[4rem] lg:h-[5rem] w-[3rem] sm:w-[4rem] lg:w-[5rem] mr-2"
                        src={YesGreen}
                        alt="Znak na Tak"
                    />
                    <p className="text-base md:text-lg font-semibold">
                        Większa odporność na ataki hakerów i spam
                    </p>
                </div>
                <div className="flex items-center justify-center mb-6">
                    <img
                        className="h-[3rem] sm:h-[4rem] lg:h-[5rem] w-[3rem] sm:w-[4rem] lg:w-[5rem] mr-2"
                        src={YesGreen}
                        alt="Znak na Tak"
                    />
                    <p className="text-base md:text-lg font-semibold">
                        Technologia klasy Premium
                    </p>

                </div>
            </div>
        </div>
    </section>
);

export default WhyGatsby;
