import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/index/hero";
import Responsive from "../components/index/responsive";
import Advantages from "../components/index/advantages";

import BgSvg1 from "../components/svg/bgSvg1";
const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <div className=" bg-white">
                <BgSvg1 />
                <Advantages />
                <Responsive />
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="Seovileo" />;

export default IndexPage;
