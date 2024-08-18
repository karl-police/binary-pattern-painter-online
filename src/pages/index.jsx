import React from "react";
import PAGE_CONFIG from "../js/modules/page_config";

import Head from "next/head";

import PageContainerMain from "../Components/PageContainerMain";

function Main_Page() {
    return (<>
        <Head>
            <title>Binary Pattern Editor - Index</title>
        </Head>

        <PageContainerMain>
            <div>
                <h2 id="about">About</h2>
                <p>
                    This Website provides some tools to create data in shape of binary matrices and export them as
                    JSON Array tables and or other.
                </p>
            </div>
            <div>
                <h2 id="links">Links</h2>
                <ul>
                    <li><a href={`${PAGE_CONFIG.home_url}/binary-pattern-editor`}>Binary Pattern Editor</a></li>
                </ul>
            </div>
        </PageContainerMain>
   </>)
}

export default Main_Page;