import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/index/hero";
import Responsive from "../components/index/responsive";
import Advantages from "../components/index/advantages";
import SpeedTest from "../components/index/speedTest";

import cardsSectionBg from "../assets/background/cardsSectionBg.png";

const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <div className=" bg-white">
                <img
                    className="absolute left-1/2 -translate-x-1/2 max-w-[2200px] h-auto w-full max-h-[63rem] min-h-[40rem]"
                    src={cardsSectionBg}
                />
                <Advantages />
                <SpeedTest />
                <Responsive />
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="Seovileo" />;

export default IndexPage;
