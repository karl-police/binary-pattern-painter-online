import React from "react";
//import { Link } from "react-router-dom";

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
                    
                </ul>
            </div>
        </PageContainerMain>
   </>)
}
//<li><Link to="/binary-pattern-editor">Binary Pattern Editor</Link></li>
export default Main_Page;