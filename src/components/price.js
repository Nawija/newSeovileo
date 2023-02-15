import * as React from "react";
import { Link } from "gatsby";

const Price = () => (
    <section
        id="cennik"
        className=" scroll-m-12 flex items-center flex-wrap justify-center text-base md:text-lg text-center globalWrapper px-3 sm:px-8 py-8 md:pt-24 md:pb-0"
    >
        <div className="globalWrapper px-1 mx-auto">
            <div className="flex flex-col text-center w-full">
                <h1 className="text-2xl lg:text-3xl font-medium title-font mb-2 text-orange-500">
                    Nie trzeba przepłacać za swoją stronę internetową!
                </h1>
                <p>
                    Nasze ceny są przystępne dla każdego i dopasowujemy je do
                    indywidualnych potrzeb każdego klienta. Skontaktuj się z
                    nami, aby uzyskać{" "}
                    <Link
                        to="/kontakt"
                        className="underline text-orange-500 font-semibold hover:text-amber-400 transition-colors duration-200"
                    >
                        darmową wycenę
                    </Link>{" "}
                    i rozpocząć współpracę już dziś!
                </p>
            </div>
            <div className="flex flex-wrap mt-6 md:mt-16">
                <div className="py-4 px-2 lg:px-10 lg:py-6 xl:w-1/3 md:w-1/2 w-full mx-auto ">
                    <div className="group shadow-orange-500 h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:scale-105 hover:rotate-2 ease-in-out hover:border-amber-300 hover:shadow-lg transition-all duration-500">
                        <p className=" absolute top-20 rotate-12 left-3/4 group-hover:bg-red-600 duration-500 transition-colors bg-orange-500 rounded-full py-3 px-1 border-2 border-white">
                            -62%
                        </p>
                        <p className="text-sm text-start tracking-widest title-font mb-1 font-medium">
                            BASE
                        </p>

                        <p className="text-5xl text-gray-200 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <div className="flex flex-col items-start justify-center">
                                <div>
                                    <span className=" line-through text-2xl group-hover:text-3xl transition-all duration-300">
                                        od 800
                                    </span>
                                    <span className="text-lg ml-1 decoration-0 font-normal">
                                        zł
                                    </span>
                                </div>
                                <div className="text-red-600 group-hover:text-green-500 transition-colors duration-500">
                                    <span>
                                        od 300
                                        <span className="text-lg ml-1 font-normal">
                                            zł
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Strona{" "}
                            <Link
                                className="ml-1 underline text-orange-100"
                                to="/pomoc"
                            >
                                One Page
                            </Link>
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Roczny{" "}
                            <Link
                                className="ml-1 underline text-orange-100"
                                to="/pomoc"
                            >
                                Hosting
                            </Link>
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Formularze
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-12">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            <Link
                                className="underline text-orange-100"
                                to="/pomoc"
                            >
                                Responsywność
                            </Link>
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
                        <p className="text-xs text-gray-200 mt-3 text-start">
                            Termin Realizacji od 3 do 4 dni
                        </p>
                    </div>
                </div>
                <div className="py-4 px-2  lg:px-10 xl:w-1/3 md:w-1/2 w-full mx-auto">
                    <div className="group h-full p-6 rounded-lg border-2 border-orange-500 flex flex-col relative overflow-hidden hover:scale-105 hover:rotate-2 ease-in-out hover:border-amber-300 hover:shadow-lg transition-all duration-500">
                        <span className="bg-orange-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl group-hover:bg-amber-400 transition-colors duration-500">
                            POPULARNY
                        </span>
                        <p className=" absolute top-20 rotate-12 left-3/4 group-hover:bg-red-600 duration-500 transition-colors bg-orange-500 rounded-full py-3 px-1 border-2 border-white">
                            -62%
                        </p>
                        <p className="text-sm text-start tracking-widest title-font mb-1 font-medium">
                            PRO
                        </p>
                        <p className="text-5xl text-gray-200 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <div className="flex flex-col items-start justify-center">
                                <div>
                                    <span className=" line-through text-2xl group-hover:text-3xl transition-all duration-300">
                                        od 1500
                                    </span>
                                    <span className="text-lg ml-1 decoration-0 font-normal">
                                        zł
                                    </span>
                                </div>
                                <div className="text-red-600 group-hover:text-green-500 transition-colors duration-500">
                                    <span>
                                        od 570
                                        <span className="text-lg ml-1 font-normal">
                                            zł
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            <Link
                                className="underline text-orange-100"
                                to="/pomoc"
                            >
                                Multi Page/One Page
                            </Link>
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Darmowy{" "}
                            <Link
                                className="ml-1 underline text-orange-100"
                                to="/pomoc"
                            >
                                Hosting
                            </Link>
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Formularze
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            <Link
                                className="ml-1 underline text-orange-100"
                                to="/pomoc"
                            >
                                Responsywność
                            </Link>
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Animacje
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Darmowa{" "}
                            <Link
                                className="ml-1 underline text-orange-100"
                                to="/pomoc"
                            >
                                Domena
                            </Link>
                        </p>

                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            2 Darmowe Modyfikacje
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-6">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Roczna Opieka
                        </p>
                        <Link
                            to="/kontakt"
                            className="flex items-center mt-auto text-white bg-gray-700 border-0 py-2 px-4 w-full focus:outline-none  rounded group-hover:bg-gray-500 transition-colors duration-500"
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
                        <p className="text-xs text-gray-200 mt-3 text-start">
                            Termin Realizacji od 5 do 7 dni
                        </p>
                    </div>
                </div>

                <div className="py-4 px-2 lg:px-10 lg:py-6 xl:w-1/3 md:w-1/2 w-full mx-auto">
                    <div className="group h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:scale-105 hover:rotate-2 ease-in-out hover:border-amber-300 hover:shadow-lg transition-all duration-500 ">
                        <p className=" absolute top-20 rotate-12 left-3/4 group-hover:bg-red-600 duration-500 transition-colors bg-orange-500 rounded-full py-3 px-1 border-2 border-white">
                            -62%
                        </p>
                        <p className="text-sm text-start tracking-widest title-font mb-1 font-medium">
                            SPECIAL
                        </p>
                        <p className="text-5xl text-gray-200 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <div className="flex flex-col items-start justify-center">
                                <div>
                                    <span className=" line-through text-2xl group-hover:text-3xl transition-all duration-300">
                                        od 3300
                                    </span>
                                    <span className="text-lg ml-1 decoration-0 font-normal">
                                        zł
                                    </span>
                                </div>
                                <div className="text-red-600 group-hover:text-green-500 transition-colors duration-500">
                                    <span className=" w-max whitespace-nowrap">
                                        od 1250
                                        <span className="text-lg ml-1 font-normal">
                                            zł
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Dowolna Strona / Sklep
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            <Link
                                className="ml-1 underline text-orange-100"
                                to="/pomoc"
                            >
                            Responsywność
                            </Link>
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Unikalne Animacje!
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            3x Darmowe Modyfikacje
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Darmowa <Link
                                className="ml-1 underline text-orange-100"
                                to="/pomoc"
                            >
                                Domena
                            </Link>
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Darmowy <Link
                                className="ml-1 underline text-orange-100"
                                to="/pomoc"
                            >
                                Hosting
                            </Link>
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Statystyki Google
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Roczna Opieka
                        </p>
                        <p className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-16">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            System <Link
                                className="ml-1 underline text-orange-100"
                                to="/pomoc"
                            >
                                CMS
                            </Link>
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
                        <p className="text-xs text-gray-200 mt-3 text-start">
                            Termin Realizacji od 7 do 14 dni
                        </p>
                    </div>
                </div>
            </div>
        </div>
       <div className="flex flex-col items-center jcenter my-6 md:my-12">
       <p className="my-2 md:my-4">
            Strony, które przyciągają wzrok, skutecznie przekazują informacje i
            prowadzą do sukcesu!
        </p>
        <p className="text-orange-200">*Dla każdej strony wcześniejszy darmowy projekt!</p>
       </div>
    </section>
);

export default Price;
