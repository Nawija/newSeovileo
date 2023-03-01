import * as React from "react";
import { Link } from "gatsby";

import bgContact from "../../assets/background/bgContact.png";
import messenger from "../../assets/contact/messenger.svg";
import amail from "../../assets/contact/amail.svg";
import mail from "../../assets/contact/mail.svg";

const SpeedTest = () => (
    <section className="relative w-full flex flex-col max-w-[2200px] items-center justify-center mx-auto text-base md:text-lg px-3 sm:px-8 pt-8 lg:pt-24">
        <img
            className="absolute left-0 -z-10 w-full h-full"
            src={bgContact}
            alt="gwiezdne tło"
        />
        <div className="flex flex-col items-center justify-center mx-auto">
            <div className=" flex items-stretch justify-between sm:px-8 py-6 lg:py-12 text-white text-center w-full">
                <div
                    className="relative flex flex-col items-center rounded-2xl justify-center overflow-hidden w-10/12 p-4 m-4
                 "
                >
                    <div className="absolute w-full h-full bg-black/30 backdrop-blur-md -z-[1]" />
                    <img className="mb-3" src={messenger} alt="mesenger" />
                    <p className="uppercase font-medium">messenger</p>
                </div>

                <div
                    className="relative flex flex-col items-center rounded-2xl justify-center overflow-hidden w-10/12 p-4 m-4
                 "
                >
                    <div className="absolute w-full h-full bg-black/30 backdrop-blur-md -z-[1]" />
                    <img className="mb-3" src={amail} alt="mesenger" />
                    <p className="uppercase font-medium">messenger</p>
                </div>
                <div
                    className="relative flex flex-col items-center rounded-2xl justify-center overflow-hidden w-10/12 p-4 m-4
                 "
                >
                    <div className="absolute w-full h-full bg-black/30 backdrop-blur-md -z-[1]" />
                    <img className="mb-3" src={mail} alt="mesenger" />
                    <p className="uppercase font-medium">messenger</p>
                </div>
            </div>
            <Link className="uppercase border-[3px] border-white bg-gradient-to-tr from-amber-400 to-amber-100 text-amber-900 text-sm font-semibold py-3 px-6 drop-shadow-lg rounded-3xl tracking-wide shadow-lg shadow-white/30 m-4 lg:m-8">
                Darmowa Wycena
            </Link>
        </div>
    </section>
);

export default SpeedTest;
