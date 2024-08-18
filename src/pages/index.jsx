import React from "react";

import PageContainerMain from "../Components/PageContainerMain";

function Main_Page() {
    return (<>
        <PageContainerMain>
            <div>
                <h2 id="about">About</h2>
                <p>
                    This Website provides some tools to create data in shape of binary matrices and export them as
                    JSON Array tables and or other.
                </p>
            </div>
            <div>
                <h2>Links</h2>
                <ul>
                    <li><a href="/binary-pattern-editor">Binary Pattern Editor</a></li>
                </ul>
            </div>
        </PageContainerMain>
   </>)
}

export default Main_Page;