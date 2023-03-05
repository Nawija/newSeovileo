import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroChild from "../components/heroChild";

const Oferta = () => (
    <Layout>
        <HeroChild />
        <div className="relative bg-zinc-900 overflow-hidden w-full z-10">
          
        </div>
    </Layout>
);

export const Head = () => <Seo title="Oferta" />;

export default Oferta;
