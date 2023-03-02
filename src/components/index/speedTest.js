import * as React from "react";
import speedTest from "../../assets/speedTest.png";

import ArrowsSVG from "../../components/svg/arrows";

const SpeedTest = () => (
    <section className="relative w-full flex flex-col lg:flex-row max-w-screen-2xl items-center justify-center mx-auto text-base md:text-lg px-3 sm:px-8 pt-8 lg:pt-24">
        <div className="w-full lg:w-1/2 lg:ml-12 px-2 lg:px-1 md:px-4 sm:px-8 py-4 md:py-12 rounded-full z-20 text-center lg:text-start">
            <h5 className=" text-sm sm:text-base lg:text-lg tracking-widest text-green-500 drop-shadow-lg">TECHNOLOGIA GATSBY</h5>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase font-semibold mb-2">Uzyskaj Najszybszą Stronę Internetową!</h1>
            <p className="text-base md:text-lg">

                Nasze strony internetowe tworzymy w technologii Gatsby, aby
                zapewnić naszym klientom najlepsze doświadczenie użytkownika.
                Dzięki szybkości i wydajności, nasze strony są łatwo dostępne
                dla każdego, bez względu na urządzenie, z jakiego korzystają.
                Integracja z różnymi źródłami danych pozwala nam łączyć dane z
                wielu źródeł i tworzyć dynamiczne strony internetowe.
                Optymalizacja SEO sprawia, że nasze strony są łatwo widoczne dla
                wyszukiwarek i znajdują się na szczycie wyników wyszukiwania.
                Wsparcie i dobre praktyki, na jakich opiera się Gatsby,
                zapewniają nam bezpieczeństwo i pewność, że nasze strony są
                zawsze najlepszej jakości.
            </p>
        </div>

        <div className="relative w-full lg:w-[80%] px-2 md:px-12 sm:px-8 py-2 md:py-12">
            <img className=" w-full h-full z-30" src={speedTest} alt="test wydajności i szybkości" />
            <ArrowsSVG />

        </div>
    </section>
);

export default SpeedTest;
