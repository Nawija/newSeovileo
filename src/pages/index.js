import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
    <Layout>
       <h1 className="flex items-center justify-center h-screen w-full text-3xl">Clear Starter Gatsby</h1>
    </Layout>
);

export const Head = () => <Seo title="Seovileo" />;

export default IndexPage;
