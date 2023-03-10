import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";




import messenger from "../../assets/contact/messenger.svg";
import amail from "../../assets/contact/amail.svg";
import mail from "../../assets/contact/mail.svg";


const SpeedTest = () => {
    return (

        <section className="relative w-full flex flex-col  max-w-[2200px] items-center justify-center mx-auto pt-8 lg:pt-24">
            <div className="absolute w-full h-full">
            <StaticImage className="h-full w-full" src="../../assets/background/bgContact.png" />
            </div>

            <div className="flex flex-col items-center justify-center w-full flex-wrap mx-auto">
                <div className=" flex flex-col md:flex-row items-center lg:items-stretch justify-center sm:px-8 py-6 lg:py-12 text-white text-center w-full">
                    <Link
                        to="https://www.facebook.com/profile.php?id=100090402000669"
                        className="relative flex shadow-inner shadow-white/40 bg-black/40 hover:scale-95 transition-transform duration-200 flex-col items-center rounded-2xl justify-center overflow-hidden w-44 p-4 m-4 lg:mx-12
                 "
                    >
                        <img
                            className="mb-3 h-auto w-16 lg:w-24"
                            src={messenger}
                            alt="mesenger"
                        />
                        <p className="uppercase font-medium">messenger</p>
                    </Link>

                    <Link
                        to="mailto:seovileo@gmail.com"
                        className="relative flex shadow-inner shadow-white/40 bg-black/40 hover:scale-95 transition-transform duration-200 flex-col items-center rounded-2xl justify-center overflow-hidden w-44 p-4 m-4 lg:mx-12
                 "
                    >
                        <img
                            className="mb-3 h-auto w-16 lg:w-24"
                            src={amail}
                            alt="mesenger"
                        />
                        <p className="uppercase font-medium">Mail</p>
                    </Link>
                    <Link
                        to="/kontakt"
                        className="relative flex shadow-inner shadow-white/40 bg-black/40 hover:scale-95 transition-transform duration-200 flex-col items-center rounded-2xl justify-center overflow-hidden w-44 p-4 m-4 lg:mx-12
                 "
                    >
                        <img
                            className="mb-3 h-auto w-16 lg:w-28"
                            src={mail}
                            alt="mesenger"
                        />
                        <p className="uppercase font-medium">Formularz</p>
                    </Link>
                </div>
                <Link
                    to="/kontakt"
                    className="uppercase border-[3px] border-white bg-gradient-to-tr from-amber-400 to-amber-100 text-amber-900 text-sm font-semibold py-3 px-6 drop-shadow-lg rounded-3xl tracking-wide shadow-lg shadow-white/30 m-4 lg:mx-12 hover:scale-95 transition-transform duration-200 lg:m-8"
                >
                    Darmowa Wycena
                </Link>
            </div>
        </section>
    );
};


export default SpeedTest;
