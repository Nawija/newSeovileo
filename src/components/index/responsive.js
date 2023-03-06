import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";


const Responsive = () => (

    <section className="relative w-full max-w-[2200px] flex flex-col items-center justify-center mx-auto pt-8 md:pt-24 text-white">

        <div className="sm:px-8 py-2 md:py-24 absolute top-[15%] md:top-[7%] z-20">

            <h3 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-xl">
                responsywność
            </h3>
            <h4 className="capitalize text-xs -mt-1 lg:text-lg text-start sm:text-end">
                na każdym użądzeniu
            </h4>
        </div>

        <StaticImage placeholder="blurred" className="w-full h-full" src="../../assets/responsMonitors.png" alt="Strona na tablecie, telefonie i komputerze"/>

    </section>
);

export default Responsive;
