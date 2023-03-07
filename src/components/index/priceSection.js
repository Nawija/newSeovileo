import * as React from "react";
import { Link } from "gatsby";

import GwarantionSection from "../../components/index/gwarantionSection";

const Responsive = () => (
    <section className="relative text-white w-full max-w-[2200px] flex flex-col bgGradientPriceSection items-center justify-center mx-auto">
        <GwarantionSection />
        <div className="sm:px-8 py-2 md:py-12">
            <div className="flex flex-col text-center w-full">
                <h3 className="text-2xl lg:text-3xl font-medium title-font mb-2 changeColor">
                    Nie trzeba przepłacać za swoją stronę internetową!
                </h3>
                <p className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
                    Nasze ceny są przystępne dla każdego i dopasowujemy je do
                    indywidualnych potrzeb każdego klienta. Skontaktuj się z
                    nami, aby uzyskać{" "}
                    <Link
                        to="/kontakt"
                        className="underline font-semibold hover:text-amber-400 transition-colors duration-200"
                    >
                        darmową wycenę
                    </Link>{" "}
                    i rozpocząć współpracę już dziś!
                </p>
            </div>
            <div className="flex flex-wrap mt-6 md:mt-16">
                <div className="py-4 px-4 lg:px-10 lg:py-6 xl:w-1/3 md:w-1/2 w-full mx-auto ">
                    <div className="group h-full p-6 rounded-lg border-2 border-orange-500 bg-gradient-to-b from-[#0F1C1B] to-[#232d2c] flex flex-col relative overflow-hidden hover:scale-105 hover:rotate-2 ease-in-out hover:border-amber-300 bgCardsGradient hover:shadow-2xl transition-all duration-500">
                        <h2 className="text-sm text-start tracking-widest title-font mb-1 font-medium">
                            BASE
                        </h2>
                        <p className="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>od 300</span>
                            <span className="text-lg ml-1 font-normal ">
                                zł
                            </span>
                        </p>
                        <p className="flex items-center mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Strona One Page
                        </p>
                        <p className="flex items-center mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Darmowy Roczny Hosting
                        </p>
                        <p className="flex items-center mb-6">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            2 Darmowe Modyfikacje
                        </p>
                        <Link
                            to="/kontakt"
                            className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none rounded group-hover:bg-gray-700 transition-colors duration-500"
                        >
                            Sprawdz
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-4 h-4 ml-auto"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <p className="text-xs text-gray-300 mt-3 text-start">
                            Termin Realizacji od 2 do 4 dni
                        </p>
                    </div>
                </div>
                <div className="py-4 px-4  lg:px-10 xl:w-1/3 md:w-1/2 w-full mx-auto">
                    <div className="group h-full p-6 rounded-lg bg-gradient-to-b from-orange-500 to-orange-400 border-black flex flex-col relative overflow-hidden hover:scale-105 hover:rotate-2 ease-in-out hover:border-amber-300 hover:shadow-2xl text-black transition-all  duration-500">
                        <span className="bg-[#eaad15] font-bold px-3 py-2 tracking-widest text-xs absolute right-0 top-0 rounded-bl group-hover:bg-amber-400 transition-colors duration-500">
                            POPULARNY
                        </span>
                        <h2 className="text-sm text-start font-bold tracking-widest title-font mb-1 ">
                            PRO
                        </h2>
                        <h2 className="text-5xl leading-none  text-white flex items-center pb-4 mb-4 border-b border-gray-200 group-hover:border-white transition-colors duration-500">
                            <span>od 500</span>
                            <span className="text-lg ml-1 text-white font-normal ">
                                zł
                            </span>
                        </h2>
                        <p className="flex items-center mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Strona Multi Page/One Page
                        </p>
                        <p className="flex items-center mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Unikalne Animacje
                        </p>
                        <p className="flex items-center mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Darmowy Roczny Hosting
                        </p>
                        <p className="flex items-center mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            3 Darmowe Modyfikacje
                        </p>
                        <p className="flex items-center mb-6">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Roczna Opieka
                        </p>
                        <Link
                            to="/kontakt"
                            className="flex items-center mt-auto bg-gray-700 text-white border-0 py-2 px-4 w-full focus:outline-none  rounded group-hover:bg-gray-800 transition-colors duration-500"
                        >
                            Sprawdz
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-4 h-4 ml-auto"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <p className="text-xs mt-3 text-start">
                            Termin Realizacji od 4 do 7 dni
                        </p>
                    </div>
                </div>

                <div className="py-4 px-4 lg:px-10 lg:py-6 xl:w-1/3 md:w-1/2 w-full mx-auto">
                    <div className="group h-full p-6 rounded-lg border-2 border-orange-500 flex flex-col relative overflow-hidden hover:scale-105 bg-gradient-to-b from-[#0F1C1B] to-[#232d2c] hover:rotate-2 ease-in-out hover:border-amber-300 bgCardsGradient hover:shadow-2xl transition-all duration-500 ">
                        <h2 className="text-sm text-start tracking-widest title-font mb-1 font-medium">
                            SPECIAL
                        </h2>
                        <h2 className="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>od 1200</span>
                            <span className="text-lg ml-1 font-normal">
                                zł
                            </span>
                        </h2>
                        <p className="flex items-center mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Strona Bez Limitów
                        </p>
                        <p className="flex items-center mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Unikalne Animacje
                        </p>
                        <p className="flex items-center mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Bez Limitu Modyfikacji
                        </p>
                        <p className="flex items-center mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Wdrążenie każdego pomysłu
                        </p>
                        <p className="flex items-center mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Darmowy Projekt Strony
                        </p>
                        <p className="flex items-center mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Darmowy 3 Letni Hosting
                        </p>
                        <p className="flex items-center mb-6">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Unikalny Design
                        </p>
                        <Link
                            to="/kontakt"
                            className="flex items-center text-white mt-auto bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none rounded group-hover:bg-gray-700 transition-colors duration-500"
                        >
                            Sprawdz
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-4 h-4 ml-auto"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <p className="text-xs text-gray-300 mt-3 text-start">
                            Termin Realizacji od 7 do 14 dni
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <p className="my-6 md:my-12 mx-auto text-center text-xl">
            Strony, które przyciągają wzrok, skutecznie przekazują informacje i
            prowadzą do sukcesu!
        </p>
    </section>
);

export default Responsive;
