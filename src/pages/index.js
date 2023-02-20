import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import { TypeAnimation } from "react-type-animation";

import heroVideo from "../assets/heroVideo.mp4";
import speedTest from "../assets/speedTest.png";

const IndexPage = () => {
    return (
        <Layout>
            <section className="relative h-screen flex flex-col items-center justify-center text-base mx-auto max-w-[2500px] md:text-lg xl:items-start xl:px-0 px-3 sm:px-8 py-2 md:py-24">
                <video
                    className="absolute max-w-[2200px] mx-auto h-full w-full object-cover object-center -z-10"
                    src={heroVideo}
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                />

                <div class="bg-amber-300 max-w-[2200px] mx-auto mix-blend-multiply absolute h-full w-full -z-10"></div>
                <h2
                    data-sal="slide-up"
                    data-sal-delay="400"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    className="text-main text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold w-full items-center justify-center px-2 mb-9 xl:text-start xl:ml-44 xl:w-1/2 flex"
                >
                    <TypeAnimation
                        sequence={[
                            "Stwórz swoją wizytówkę w internecie z nami!",
                            2000, // Waits 1s
                            "Najszybsza technologia na rynku!",
                            2000, // Waits 2s
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ height: "30vh" }}
                    />
                </h2>
                <div className="flex items-center xl:ml-44">
                    <Link
                        data-sal="flip-up"
                        data-sal-delay="700"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        className="w-full mx-3 font-semibold md:w-max px-6 py-3 bg-white border-2 border-gray-200 rounded-lg "
                        to="/"
                    >
                        Oferta
                    </Link>
                    <Link
                        data-sal="flip-up"
                        data-sal-delay="1000"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        className="w-full mx-3 font-semibold md:w-max px-6 py-3 bg-zinc-900 text-main border-2  border-gray-200 rounded-lg "
                        to="/"
                    >
                        Zalety
                    </Link>
                </div>
                <div className="absolute bottom-9 h-14 w-14 rounded-full p-1 anim-scroll-down fill-zinc-200/80 xl:left-1/2">
                    <svg
                        className="h-full w-full"
                        xmlns="http://www.w3.org/2000/svg"
                        class="ionicon"
                        viewBox="0 0 512 512"
                    >
                        <title>Caret Down Circle</title>
                        <path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-121.57-17.77l-74.13 89.09a16 16 0 01-24.6 0l-74.13-89.09A16 16 0 01181.86 212h148.28a16 16 0 0112.29 26.23z" />
                    </svg>
                </div>
            </section>
            <svg
                className="absolute left-1/2 -translate-x-1/2 max-w-[2200px] -z-50 h-auto w-full"
                viewBox="0 0 1906 711"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 5H1906V649.911C1906 649.911 1037.5 787.361 953 649.911C868.5 512.462 0 649.911 0 649.911V5Z"
                    fill="url(#paint0_linear_873_40)"
                />
                <path
                    d="M0 0H1906V644.911C1906 644.911 1037.5 782.361 953 644.911C868.5 507.462 0 644.911 0 644.911V0Z"
                    fill="url(#paint1_linear_873_40)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_873_40"
                        x1="1820"
                        y1="662"
                        x2="144"
                        y2="635.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#19B000" />
                        <stop offset="0.531251" stop-color="#FF8A00" />
                        <stop offset="1" stop-color="white" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_873_40"
                        x1="1219"
                        y1="763.5"
                        x2="1171.5"
                        y2="-9.50006"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#010900" />
                        <stop offset="1" stop-color="#010000" />
                    </linearGradient>
                </defs>
            </svg>
            <section>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-main text-center mt-6 sm:mt-8 md:mt-12 xl:mt-24 uppercase tracking-wide font-semibold">
                    Co nas wyróżnia?
                </h3>
                <div className="flex flex-col sm:flex-row flex-wrap items-center sm:items-stretch justify-center max-w-screen-xl mx-auto px-8 sm:px-12 ">
                    <div className=" bg-gradient-to-b from-slate-50 to-slate-200 p-4 mt-6 sm:mt-8 md:mt-12 xl:shadow-orange-200/50 xl:shadow-lg xl:mt-24 flex flex-col items-center justify-center w-full sm:w-2/5 sm:mx-6 xl:w-1/5 text-center rounded-xl shadow-2xl">
                        <p className="text-amber-500 text-7xl font-semibold">
                            50%
                        </p>
                        <p className="p-3">
                            Większa predkość ładowania strony w porownaniu z
                            konkurencją
                        </p>
                    </div>
                    <div className=" bg-gradient-to-b from-slate-50 to-slate-200 p-4 mt-6 sm:mt-8 md:mt-12 xl:shadow-orange-200/50 xl:shadow-lg xl:mt-24 flex flex-col items-center justify-center w-full sm:w-2/5 sm:mx-6 xl:w-1/5 text-center rounded-xl shadow-2xl">
                        <p className="text-amber-500 text-7xl font-semibold">
                            20x
                        </p>
                        <p className="p-3">
                            Lepsza optymalizacja kodu strony internetowej vs
                            konkurencja
                        </p>
                    </div>
                    <div className=" bg-gradient-to-b from-slate-50 to-slate-200 p-4 mt-6 sm:mt-8 md:mt-12 xl:shadow-orange-200/50 xl:shadow-lg xl:mt-24 flex flex-col items-center justify-center w-full sm:w-2/5 sm:mx-6 xl:w-1/5 text-center rounded-xl shadow-2xl">
                        <p className="text-amber-500 text-7xl font-semibold">
                            2x
                        </p>
                        <p className="p-3">
                            Zwiększenie widoczności "SEO Boost" vs konkurencja
                        </p>
                    </div>
                    <div className=" bg-gradient-to-b from-slate-50 to-slate-200 p-4 mt-6 sm:mt-8 md:mt-12 xl:shadow-orange-200/50 xl:shadow-lg xl:mt-24 flex flex-col items-center justify-center w-full sm:w-2/5 sm:mx-6 xl:w-1/5 text-center rounded-xl shadow-2xl">
                        <p className="text-amber-500 text-7xl font-semibold">
                            70%
                        </p>
                        <p className="p-3">
                            Większa wydajność strony w porownaniu z konkurencją
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col lg:flex-row text-center lg:text-start items-center justify-center px-4 mx-auto text-base max-w-screen-2xl md:text-lg xl:px-0 sm:px-8 py-12 md:py-24">
                <div className="w-full lg:w-2/5 p-1 md:p-4 mb-12 lg:mb-0">
                    <h5 className="text-green-500 tracking-widest text-sm">
                        TECHNOLOGIA GATSBY!
                    </h5>
                    <h4 className="text-2xl font font-semibold uppercase mb-2">
                        Uzyskaj najszybszą strone w Internecie
                    </h4>
                    <p>
                        Nasze strony internetowe tworzymy w technologii Gatsby,
                        aby zapewnić naszym klientom najlepsze doświadczenie
                        użytkownika. Dzięki szybkości i wydajności, nasze strony
                        są łatwo dostępne dla każdego, bez względu na
                        urządzenie, z jakiego korzystają. Integracja z różnymi
                        źródłami danych pozwala nam łączyć dane z wielu źródeł i
                        tworzyć dynamiczne strony internetowe. Optymalizacja SEO
                        sprawia, że nasze strony są łatwo widoczne dla
                        wyszukiwarek i znajdują się na szczycie wyników
                        wyszukiwania. Wsparcie i dobre praktyki, na jakich
                        opiera się Gatsby, zapewniają nam bezpieczeństwo i
                        pewność, że nasze strony są zawsze najlepszej jakości.
                    </p>
                </div>
                <img className="lg:w-3/5 w-full" src={speedTest} alt="test szybkości strony internetowej" />
            </section>
            <svg
            className="absolute left-1/2 -translate-x-1/2 -z-50 h-auto w-full -mt-24 max-w-[2200px] mx-auto"
                viewBox="0 0 1906 804"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 42.8832C0 42.8832 913.5 -53.604 953 42.8832C992.5 139.37 1906 42.8832 1906 42.8832V738.142C1906 738.142 1037.5 886.322 953 738.142C868.5 589.962 0 738.142 0 738.142V42.8832Z"
                    fill="url(#paint0_linear_879_45)"
                />
                <path
                    d="M0 78.7778C0 78.7778 913.5 -10.7222 953 78.7778C992.5 168.278 1906 78.7778 1906 78.7778V723.689C1906 723.689 1037.5 861.138 953 723.689C868.5 586.239 0 723.689 0 723.689V78.7778Z"
                    fill="url(#paint1_linear_879_45)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_879_45"
                        x1="4.5569e-09"
                        y1="402"
                        x2="1895.43"
                        y2="394.039"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#C6C6C6" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_879_45"
                        x1="1219"
                        y1="842.277"
                        x2="1171.5"
                        y2="69.277"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#031500" />
                        <stop offset="1" stop-color="#010000" />
                    </linearGradient>
                </defs>
            </svg>
            <section></section>

            <div className="h-[200vh]"></div>
        </Layout>
    );
};

export const Head = () => <Seo title="Seovileo" />;

export default IndexPage;
