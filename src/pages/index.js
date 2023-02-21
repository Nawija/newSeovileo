import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/index/hero";
import BgSvg1 from "../components/svg/bgSvg1";
import BgSvg2 from "../components/svg/bgSvg2";

import speedTest from "../assets/speedTest.png";

const IndexPage = () => {
    return (
        <Layout>
            <Hero />

            <BgSvg1 />
            
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

            <BgSvg2 />
           
            <section></section>

            <div className="h-[200vh]"></div>
        </Layout>
    );
};

export const Head = () => <Seo title="Seovileo" />;

export default IndexPage;
