import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import ScrollUpIcon from "./scrollUpIcon";
import Footer from "./footer";
import Messenger from "./messenger";
import Loader from "./loader";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Loader />
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <ScrollUpIcon />
            <div>
                <Messenger />

                <main>{children}</main>

                <Footer />
            </div>
        </>
    );
};

export default Layout;
