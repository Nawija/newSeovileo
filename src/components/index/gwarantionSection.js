import * as React from "react";
import GwarantionSVG from "../../assets/gwarantion.svg";

const SpeedTest = () => (
    <section className="relative flex flex-col max-w-screen-lg items-center justify-center mx-auto text-base md:text-lg px-3 sm:px-8 pt-8 lg:pt-24">
        <div className="flex items-center justify-end pb-6">
            <img className="pr-2" src={GwarantionSVG} alt="gwarancja" />
            <p>
                <span className=" font-semibold">
                    Gwarancja unikalnego projektu:
                </span>{" "}
                Po nawiazaniu kontaktu i udzieleniu niezbednych informacji,
                zostanie przedstawiony unikalny projekt do akceptacji przez
                klienta
            </p>
        </div>
        <div className="flex items-center justify-end mb-6">
            <img className="pr-2" src={GwarantionSVG} alt="gwarancja" />
            <p>
                <span className=" font-semibold">Gwarancja jakości:</span>{" "}
                Sprzedający projektująca stronę internetową zapewni Ci, że
                strona będzie działać bez awarii i spełni określone standardy
                jakości.
            </p>
        </div>
        <div className="flex items-center justify-end mb-6">
            <img className="pr-2" src={GwarantionSVG} alt="gwarancja" />
            <p>
                <span className=" font-semibold">
                Gwarancja wsparcia technicznego:
                </span>{" "}
                W przypadku wystąpienia problemów z Twoją stroną internetową, sprzedający projektująca udzieli Ci wsparcia technicznego, aby pomóc Ci rozwiązać te problemy.</p>
        </div>
    </section>
);

export default SpeedTest;
