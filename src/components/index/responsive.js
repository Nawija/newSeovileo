import * as React from "react";
import pcMobileTablet from "../../assets/pcMobileTablet.svg";

const Responsive = () => (
    <section className="relative w-full flex flex-col items-center justify-center mx-auto text-base md:text-lg px-3 sm:px-8 pt-8 md:pt-24">
        <div className="sm:px-8 py-2 md:py-24">
            <h3 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
                responsywność
            </h3>
            <h4 className="capitalize text-end text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-500">
                na każdym użądzeniu
            </h4>
        </div>
        <img src={pcMobileTablet} alt="Strona na tablecie, telefonie i komputerze"/>
    </section>
);

export default Responsive;
