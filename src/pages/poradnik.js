import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

import HeroChild from "../components/heroChild";
import { StaticImage } from "gatsby-plugin-image";

const Poradnik = () => (
    <Layout>
        <HeroChild />
        <div className="relative bg-zinc-900 overflow-hidden w-full z-10">
            <section
                id="seo"
                className="relative text-base text-white mx-auto max-w-screen md:text-lg text-center px-3 sm:px-8 py-8 md:py-16"
            >
                <div class="container mx-auto flex pt-8 pb-12 px-8 md:flex-row flex-col items-center justify-between">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
                        <h2 class="title-font lg:text-5xl sm:text-4xl text-3xl mb-4 text-zinc-200 font-coming font-black">
                            Co to jest SEO?
                        </h2>
                        <p class="mb-4 leading-relaxed">
                            Jest to proces polegający na dostosowywaniu strony
                            internetowej oraz jej treści tak, aby była ona
                            lepiej widoczna w wynikach wyszukiwania, co
                            przekłada się na wyższą pozycję strony w wynikach
                            wyszukiwania. Celem SEO jest zwiększenie ruchu na
                            stronie poprzez poprawienie widoczności w wynikach
                            wyszukiwania.
                        </p>
                    </div>
                    <StaticImage
                        class="w-full md:w-1/2 lg:w-1/3 h-64 md:h-72 lg:h-96 object-contain object-center rounded-md mx-auto"
                        alt="hero"
                        src="https://cdn.pixabay.com/photo/2014/08/06/00/06/search-engine-411105_960_720.jpg"
                        placeholder="blurred"
                    />
                </div>
            </section>

            <section
                id="hosting"
                class="relative text-base mx-auto text-white max-w-screen md:text-lg text-center px-3 sm:px-8 py-8 md:py-0"
            >
                <div class="container mx-auto flex pt-8 pb-12 px-8 md:flex-row flex-col items-center justify-between">
                    <div class="md:order-1 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-end md:text-right mb-8 md:mb-0 items-center text-center">
                        <h2 class="title-font lg:text-5xl sm:text-4xl text-3xl mb-4 text-zinc-200 font-coming font-black">
                            Czym jest Hosting?
                        </h2>
                        <p class="mb-4 leading-relaxed">
                            Usługa polegająca na przechowywaniu plików strony
                            internetowej na specjalnym serwerze, dzięki czemu
                            strona jest dostępna dla użytkowników internetu.
                            Hosting jest niezbędny do funkcjonowania strony
                            internetowej, ponieważ bez tej usługi strona nie
                            będzie dostępna dla użytkowników.
                        </p>
                    </div>
                    <StaticImage
                        class="w-full md:w-1/2 lg:w-1/3 h-64 md:h-72 lg:h-96 object-contain object-center rounded-md mx-auto"
                        alt="hero"
                        placeholder="blurred"
                        src="https://cdn.pixabay.com/photo/2014/08/06/00/06/search-engine-411105_960_720.jpg"
                    />
                </div>
            </section>

            <section
                id="domena"
                class="relative text-base mx-auto max-w-screen text-white md:text-lg text-center px-3 sm:px-8 py-8 md:py-16"
            >
                <div class="container mx-auto flex pt-8 pb-12 px-8 md:flex-row flex-col items-center justify-between">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
                        <h2 class="title-font lg:text-5xl sm:text-4xl text-3xl mb-4 text-zinc-200 font-coming font-black">
                            Co to jest Domena?
                        </h2>
                        <p class="mb-4 leading-relaxed">
                            to unikalny adres internetowy, który pozwala na
                            odnalezienie strony internetowej przez użytkowników.
                            Domena składa się z nazwy i rozszerzenia, np.
                            "nazwa.pl" Rejestracja domeny jest pierwszym krokiem
                            do utworzenia własnej strony internetowej, ponieważ
                            bez niej nie można zarejestrować adresu IP serwera,
                            na którym będzie znajdowała się strona internetowa.
                            Domeny są rejestrowane przez różne firmy, zwane
                            rejestratorami domen.
                        </p>
                    </div>
                    <StaticImage
                        class="w-full md:w-1/2 lg:w-1/3 h-64 md:h-72 lg:h-96 object-cover object-center rounded-md mx-auto"
                        alt="hero"
                        placeholder="blurred"
                        src="https://cdn.pixabay.com/photo/2016/02/05/17/30/internet-1181587_960_720.png"
                    />
                </div>
            </section>

            <section
                id="onepage"
                class="relative text-base mx-auto max-w-screen text-white md:text-lg text-center px-3 sm:px-8 py-8 md:py-0"
            >
                <div class="container mx-auto flex pt-8 pb-12 px-8 md:flex-row flex-col items-center justify-between">
                    <div class="md:order-1 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-end md:text-right mb-8 md:mb-0 items-center text-center">
                        <h2 class="title-font lg:text-5xl sm:text-4xl text-3xl mb-4 text-zinc-200 font-coming font-black">
                            Co to Strona One Page?
                        </h2>
                        <p class="mb-4 leading-relaxed">
                            Strona One Page, czyli strona jednostronicowa, to
                            rodzaj strony internetowej, która zawiera wszystkie
                            niezbędne informacje na jednej stronie. Wszystkie
                            treści, takie jak tekst, zdjęcia, filmy, formularze
                            kontaktowe itp. znajdują się na jednej stronie i są
                            dostępne po przewinięciu strony. Ta forma strony
                            jest często stosowana w celach promocyjnych, jako
                            wizytówka firmy lub w przypadku gdy zawartość strony
                            jest ograniczona.
                        </p>
                    </div>
                    <StaticImage
                        class="w-full md:w-1/2 lg:w-1/3 h-64 md:h-72 lg:h-96 object-cover object-center rounded-md mx-auto"
                        alt="hero"
                        placeholder="blurred"
                        src="https://cdn.pixabay.com/photo/2014/08/06/00/06/search-engine-411105_960_720.jpg"
                    />
                </div>
            </section>

            <section
                id="multipage"
                class="relative text-base mx-auto max-w-screen text-white md:text-lg text-center px-3 sm:px-8 py-8 md:py-16"
            >
                <div class="container mx-auto flex pt-8 pb-12 px-8 md:flex-row flex-col items-center justify-between">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
                        <h2 class="title-font lg:text-5xl sm:text-4xl text-3xl mb-4 text-zinc-200 font-coming font-black">
                            Co to Strona Multi Page?
                        </h2>
                        <p class="mb-4 leading-relaxed">
                            Strona multi page, czyli strona wielostronicowa, to
                            rodzaj strony internetowej, która składa się z kilku
                            lub wielu podstron. Taka strona internetowa może
                            mieć kilka lub kilkanaście podstron, które
                            przedstawiają różne informacje dotyczące danej
                            tematyki. Strony multi page są często stosowane
                            przez firmy, które chcą przedstawić szczegółowe
                            informacje dotyczące swoich produktów lub usług,
                            albo które mają bogatą treść do przedstawienia swoim
                            użytkownikom.
                        </p>
                    </div>
                    <StaticImage
                        class="w-full md:w-1/2 lg:w-1/3 h-64 md:h-72 lg:h-96 object-cover object-center rounded-md mx-auto"
                        alt="hero"
                        placeholder="blurred"
                        src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    />
                </div>
            </section>

            <section
                id="respo"
                class="relative text-base mx-auto max-w-screen text-white md:text-lg text-center px-3 sm:px-8 py-8 md:py-0"
            >
                <div class="container mx-auto flex pt-8 pb-12 px-8 md:flex-row flex-col items-center justify-between">
                    <div class="md:order-1 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-end md:text-right mb-8 md:mb-0 items-center text-center">
                        <h2 class="title-font lg:text-5xl sm:text-4xl text-3xl mb-4 text-zinc-200 font-coming font-black">
                            Co to jest Responsywna Strona?
                        </h2>
                        <p class="mb-4 leading-relaxed">
                            Responsywność strony internetowej oznacza, że strona
                            ta jest dostosowana do różnych rozmiarów ekranów
                            urządzeń, na których jest wyświetlana. Responsywna
                            strona automatycznie dostosowuje swoją szerokość,
                            układ i typografię do rozmiaru ekranu, dzięki czemu
                            zapewnia dobre doświadczenie użytkownika na każdym
                            urządzeniu, czy to komputerze, tablecie czy
                            smartfonie. Dzięki responsywności strona internetowa
                            jest czytelna i łatwa do nawigacji, bez potrzeby
                            tworzenia oddzielnych wersji strony dla różnych
                            urządzeń.
                        </p>
                    </div>
                    <StaticImage
                        class="w-full md:w-1/2 lg:w-1/3 h-64 md:h-72 lg:h-96 object-cover object-center rounded-md mx-auto"
                        alt="hero"
                        placeholder="blurred"
                        src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                </div>
            </section>

            <section
                id="design"
                class="relative text-base mx-auto max-w-screen md:text-lg text-white text-center px-3 sm:px-8 py-8 md:py-16"
            >
                <div class="container mx-auto flex pt-8 pb-12 px-8 md:flex-row flex-col items-center justify-between">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
                        <h2 class="title-font lg:text-5xl sm:text-4xl text-3xl mb-4 text-zinc-200 font-coming font-black">
                            Czym jes Design?
                        </h2>
                        <p class="mb-4 leading-relaxed">
                            Proces tworzenia i projektowania produktów, usług,
                            przestrzeni i komunikacji. Jest to
                            interdyscyplinarny obszar, który obejmuje zarówno
                            aspekty estetyczne, jak i funkcjonalne. Celem
                            designu jest stworzenie rozwiązania, które jest nie
                            tylko atrakcyjne wizualnie, ale również przydatne i
                            użyteczne. Design może dotyczyć różnych dziedzin,
                            takich jak architektura, grafika, moda, przemysł,
                            produktów, interfejsów i usług.
                        </p>
                    </div>
                    <StaticImage
                        class="w-full md:w-1/2 lg:w-1/3 h-64 md:h-72 lg:h-96 object-cover object-center rounded-md mx-auto"
                        alt="hero"
                        placeholder="blurred"
                        src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    />
                </div>
            </section>
        </div>
    </Layout>
);

export const Head = () => <Seo title="Baza Wiedzy" />;

export default Poradnik;
