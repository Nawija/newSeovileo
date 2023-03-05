// Logic exports
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import { StaticImage } from "gatsby-plugin-image";

// Index components exports
import Hero from "../components/index/hero";
import Responsive from "../components/index/responsive";
import Advantages from "../components/index/advantages";
import SpeedTest from "../components/index/speedTest";
import WhyGatsby from "../components/index/whyGatsby";
import ContactSection from "../components/index/contactSection";
import GwarantionSection from "../components/index/gwarantionSection";
import PriceSection from "../components/index/priceSection";

const IndexPage = () => {
    return (
        <Layout>
            <Hero />

            <div className="relative bg-white overflow-hidden w-full z-10">
                <div className="absolute left-1/2 -translate-x-1/2 max-w-[2200px] h-auto w-[310vw] md:w-[360vw] lg:w-[110vw] max-h-[63rem] min-h-[90rem] sm:min-h-[60rem] md:min-h-[90rem] lg:min-h-[60rem]">
                    <StaticImage
                        placeholder="blurred"
                        layout="constrained"
                        className="w-full h-full"
                        src="../assets/background/cardsSectionBg.png"
                        alt="tło"
                    />
                </div>
                <Advantages />
                <SpeedTest />
                <WhyGatsby />
                <ContactSection />
                <GwarantionSection />
                <PriceSection />
                <Responsive />
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="Seovileo" />;

export default IndexPage;
